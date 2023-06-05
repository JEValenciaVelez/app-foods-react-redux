const axios = require("axios");
const {URL, API_KEY} = process.env;



const getRecipes = async() => {
    try{
        const response = await axios.get(`${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20`);
        const data = response.data;
        const results = data.results;
        const recipes = results.map(rec=>{
            return {
                id: rec.id,
                title: rec.title,
                image: rec.image,
                summary: rec.summary.replace(/<\/?[^>]+(>|$)/g, ""),
                diets: rec.diets,
            }
        });
        return recipes;
    }catch(error){
        console.log(error);
    }
}

module.exports = {getRecipes}