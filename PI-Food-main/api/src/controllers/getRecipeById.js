const axios = require("axios");
const {URL,API_KEY} = process.env;
const {Recipe}  = require('../db')


const getRecipeById = async(id)=>{
    try{
        const response = await axios.get(`${URL}${id}/information?apiKey=${API_KEY}`);
        const data = response.data;
        const recipe = {
            id : data.id,
            title : data.title,
            image : data.image,
            summary : data.summary.replace(/<\/?[^>]+(>|$)/g, ""),
            healthScore: data.healthScore,
            diets : data.diets,
            steps: data.instructions.replace(/<\/?[^>]+(>|$)/g, "")
        }
        return recipe;
    }catch(error){
        console.log(error);
        await Recipe.sync();
        try{
            const recipeFounded = await Recipe.findOne({
                where: {id: id}
            });
            if(!recipeFounded) return 'No hay registros'
            return {
                id : recipeFounded.id,
                image: recipeFounded.image,
                name: recipeFounded.name,
                summary: recipeFounded.summary,
                healthScore: recipeFounded.healthScore,
                steps: recipeFounded.steps
            }
        }catch(error){
            console.log('Error en database-> ',error)
        }
    }
}

module.exports = {getRecipeById}