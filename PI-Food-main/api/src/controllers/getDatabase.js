const {Recipe} = require('../db');



const getDatabase = async() => {
    try{
        await Recipe.sync();
        const recipes = await Recipe.findAll();
        return recipes;
    }catch(error){
        throw error;
    }
};


module.exports = {getDatabase};