
const axios = require('axios');
const {Recipe, Diet} = require('../db');
const{URL, API_KEY} = process.env;




const getRecipeById = async (id) => {

   await Recipe.sync();

   const response = await Recipe.findByPk(id);

   return response
   
};



const getRecipeByName = async (name) =>{

 try{
  await Recipe.sync();
  const response = await Recipe.findOne({
    where:{
      name: name
    }
  })
  console.log(response)
  return response;
 }catch(error){
  console.log(error)
 }
   
};




const createRecipe = async (recipe) => {

   // valido q se ingresen las propiedades requeridas del objeto recipe
  if (!recipe.name || !recipe.summary || !recipe.image || !recipe.healthScore || !recipe.steps) {
    throw new Error('The recipe must have properties name, summary, image, healthScore, steps');
  }

  // Chekeo q exista en base de datos
  const recipeEncontrada = await Recipe.findOne({
    where: { name: recipe.name }
  });
  if (recipeEncontrada) {
    throw new Error('The recipe already exists in the database');
  }

  //sincronizo tabla de recetas de la base de datos
  await Recipe.sync();

  // creo la receta en la base de datos
  const newRecipe = await Recipe.create({
    name: recipe.name,
    image: recipe.image,
    summary: recipe.summary,
    healthScore: recipe.healthScore,
    steps: recipe.steps
  });

  console.log('Recipe created in the database:', newRecipe);

  const recipes = await Recipe.findAll();

  console.log(recipes);

  return recipes;
  
};




const getDiets = async () => {

    const response = await axios.get(`${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);   

    const data = response.data;

    const elementsOfData = Object.values(data)[0];

    const allDiets = [];

    //Utilizo un ciclo for en lugar de un forEach debido a que este último no espera a que todas las promesas se resuelvan
    //antes de continuar, lo que puede causar errores al momento de guardar los datos en la BD.
    for(let i = 0; i < elementsOfData.length; i++) {
        const el = elementsOfData[i];
        allDiets.push(el.diets.join(',').split(','));
    }

    const newArray = allDiets.flat();

    const newArrayUnico = newArray.filter((item,index,self)=> self.indexOf(item)===index);

    await Diet.sync();

    //Utilizo un ciclo for en lugar de un forEach por la misma razón que antes.
    for(let i = 0; i < newArrayUnico.length; i++) {
        const el = newArrayUnico[i];
        await Diet.create({
            Nombre: el
        });
    }

    await Diet.sync();

    const dietsEnBD = await Diet.findAll();
    
    const nombres = dietsEnBD.map((diet) => diet.Nombre);
    
    if(nombres.length<1) throw new Error('No existen registros');

    return nombres.join(',');
    
    
};

//funcion para traer data de las recetas de la base de datos
const getDataBase = async () => {

  //sincronizo tabla recipe de la database
  await Recipe.sync();

  //accedo a la data de la tabla
  const recipesDB = await Recipe.findAll();

  //verifico que haya data 
  if (recipesDB.length === 0) {
    console.log("No hay recetas en la base de datos");
    return "No hay recetas en la base de datos"; // o cualquier otro valor que quieras devolver en este caso
  }

  return recipesDB;
  //console.log(recipesDB);

};

const deleteRecipe = async (name) => {
  // esperar sincronización de la tabla
  await Recipe.sync();

  // buscar la receta en la tabla por su nombre
  let recipe = await Recipe.findOne({
    where:{
      name: name
    }
  });

  if (!recipe) {
    // si no se encuentra la receta, lanzar una excepción indicando que no se encontró
    throw new Error(`No se encontró la receta con nombre ${name}`);
  }

  // eliminar la receta de la base de datos
  await recipe.destroy();

  // retornar un mensaje indicando que se eliminó la receta exitosamente
  return `Se eliminó la receta  ${name} exitosamente`;
};




module.exports = {getRecipeById, getRecipeByName, createRecipe, getDiets,getDataBase, deleteRecipe};