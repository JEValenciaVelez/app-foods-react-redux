const axios = require('axios');
const {URL, API_KEY} = process.env;


const getRecipesBYName = async (name) => {
    try{
        const response = await axios.get(`${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20`);
        const data = response.data;
        const results = data.results;
        const filterRecipes = results.filter(rec=> rec.title.toLowerCase().split(' ').includes(name.toLowerCase()));
        const recipes = filterRecipes.map(rec => {
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image,
                healthScore: rec.healthScore,
                summary: rec.summary.replace(/<\/?[^>]+(>|$)/g, ""),
                diets: rec.diets,
            }
        })
        return recipes;
    }catch(error){
        return error
    }
};


module.exports = {getRecipesBYName}