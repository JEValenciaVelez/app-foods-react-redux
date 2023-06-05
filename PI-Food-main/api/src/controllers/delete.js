
const {Recipe} = require('../db');


const deleteRecipe = async (name) => {
    try{
        const nameToLower = name.toLowerCase().trim();
        const findRecipe = await Recipe.findOne({
            where: {name: nameToLower}
        });
        if(!findRecipe){
            return 'No se encontro la receta';
        }else{
            await findRecipe.destroy();
            return `Receta ${name} eliminada con exito`
        }

    }catch(error){
        throw error;
    }
};


module.exports = {deleteRecipe}