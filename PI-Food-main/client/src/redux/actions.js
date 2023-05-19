import { CREATE_RECIPE, DELETE_RECIPE, GET_RECIPES,  } from "./action-types"
import axios from 'axios';

//actions creator
//Creamos las funciones para cada type y las exportamos para posteriormente usarlas en react.

export function getRecipes(){
    
    return function (dispatch){
        return axios
        .get('http://localhost:3001/database/')
        .then((response)=>{
            return dispatch({ type: GET_RECIPES, payload: response.data });
        })
        .catch((error)=>{
            alert(error);
        })
    }
}



export function createRecipe(recipe) {

    return async (dispatch) => {
        try {
            console.log(`props recibidas en la actionCreator: ${Object.keys(recipe)}, tipo de dato: ${typeof recipe}`)
            const response = await axios.post(`http://localhost:3001/recipes/`, recipe, {maxContentLength: Infinity});
            dispatch({ type: CREATE_RECIPE, payload: response.data });
            alert('Receta creada');
        } catch (error) {
            console.log(error);
            alert(error.response.data.err)
        }
    }
}



export function deleteRecipe (name){

    return async (dispatch) => {
        try{
            console.log(`data en action: ${name}, tipo de data: ${typeof name}`);
            const response = await axios.delete(`http://localhost:3001/deleteRecipe`,  { data: { name } })
            dispatch({ type: DELETE_RECIPE, payload: response.data});
            alert('Receta Eliminada');
        }catch(error){
            alert(error)
        }
    }
}