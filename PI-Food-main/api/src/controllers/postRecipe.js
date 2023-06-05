
const {Recipe} = require('../db');



const postRecipe = async (recipe) => {
    try{
        if(!recipe.name||!recipe.image||!recipe.summary||!recipe.healthScore||!recipe.steps){
            return 'Faltan campos';
        }else{
            await Recipe.sync();
            const recipeFind = await Recipe.findOne({
                where:{name: recipe.name.toLowerCase()}
            });
            if(recipeFind){
                return 'Receta ya existe';
            }
            const newRecipe = await Recipe.create({
                name: recipe.name.trim().toLowerCase(),
                image: recipe.image,
                summary: recipe.summary,
                healthScore: recipe.healthScore,
                steps: recipe.steps
            });
            return newRecipe;
        }

    }catch(error){
        throw error;
    }
};


module.exports = {postRecipe} 