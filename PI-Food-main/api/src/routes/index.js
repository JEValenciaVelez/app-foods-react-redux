const { Router } = require('express');
// const { getRecipeById, getRecipeByName, createRecipe, getDiets, getDataBase, deleteRecipe } = require('../controllers');
const { getRecipes } = require('../controllers/getRecipes');
const { getRecipesBYName } = require('../controllers/getRecipesByName');
const { getRecipeById } = require('../controllers/getRecipeById');
const { getDiets } = require('../controllers/getDiets');
const { postRecipe } = require('../controllers/postRecipe');
const { deleteRecipe } = require('../controllers/delete');
const { getDatabase } = require('../controllers/getDatabase');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes/:idRecipe', async (req, res)=>{
    
    const {idRecipe} = req.params;
    console.log(idRecipe);

    try {
        const recipe = await getRecipeById(idRecipe);
        res.status(200).json(recipe);
      } catch (error) {
        res.status(404).json({ err: error.message });
      }
});

// Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
// La receta es recibida por parámetro (ID).
// Tiene que incluir los datos de los tipos de dietas asociados a la receta.
// Debe funcionar tanto para las recetas de la API como para las de la base de datos.


router.get('/recipes/', async (req, res)=>{

    const{name} = req.query;
    console.log('este es el name _> ',name)
    try{
        if(!name){
            res.status(200).json(await getRecipes());
        }else{
            res.status(200).json( await getRecipesBYName(name));
        }
        
    }catch(error){
        res.status(404).json({err: error.message});
    }
});

// Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarla independientemente de mayúsculas o minúsculas.
// Si no existe la receta, debe mostrar un mensaje adecuado.
// Debe buscar tanto las de la API como las de la base de datos.

router.get('/database', async (req, res)=>{

    try{
        res.status(200).json(await getDatabase());
    }catch(error){
        res.status(404).json({err: error.message});
    }
});


router.post('/recipes', async (req, res)=>{
    

    try{
        res.status(200).json(await postRecipe(req.body));
    }catch(error){
        console.log(error)
        res.status(404).json({err: error.message});
    }
})



router.get('/diets',async (req, res)=>{
    
    try{
        const diets = await getDiets();
        res.status(200).json(diets);
    }catch(error){
        res.status(404).json({err: error.message});
    }
});



router.delete('/delete', async (req, res)=>{

    const {name} = req.body;

    try{
        res.status(200).json(await deleteRecipe(name));
    }catch(error){
        res.status(404).json({error: error.message});
    }
});


module.exports = router;
