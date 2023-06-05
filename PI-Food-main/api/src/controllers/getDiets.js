
const axios = require('axios');
const {URL, API_KEY} = process.env;


const getDiets = async () => {
    try{
        const response = await axios.get(`${URL}complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20`);
        const data = response.data;
        const results = data.results
        const diets = results.map(rec => rec.diets);
        const arraysInternosEliminados = diets.flat();
        const arraySinElementosRepetidos = arraysInternosEliminados.filter((item,index,self)=> self.indexOf(item)===index);
        return arraySinElementosRepetidos;
    }catch(error){
        throw error;
    }
}


module.exports = {getDiets};