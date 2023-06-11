import {  CREATE_RECIPE, DELETE_RECIPE, GET_DATABASE, GET_RECIPES, GET_RECIPE_DETAIL, GET_RECIPE_NAME, ORDER_RECIPES,  } from "./action-types"
import axios from 'axios';

//actions creator
//Creamos las funciones para cada type y las exportamos para posteriormente usarlas en react.



export function getRecipes(){
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/recipes`);
            const data = response.data;
            dispatch({type:GET_RECIPES, payload: data});
        }catch(error){
            console.log(error)
        }
    }
}


export function detail(id){
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/recipes/${id}`);
            const data = response.data;
            dispatch({type: GET_RECIPE_DETAIL, payload: data})
        }catch(error){
            console.log(error);
            alert(error.message);
        }
    }
}


export function deleteRecipe (name) {
    return async (dispatch) => {
        try{
            const response = await axios.delete(`http://localhost:3001/delete`, {data: {name}} );
            const data = response.data;
            dispatch({type: DELETE_RECIPE, payload: data});
        }catch(error){
            console.log(error);
        }
    }
}


export function postRecipe (recipe) {
    return async (dispatch) => {
        try{
            const response = await axios.post(`http://localhost:3001/recipes`, recipe, {maxContentLength: Infinity});
            const data = response.data;
            dispatch({type: CREATE_RECIPE, payload: data});
            alert('Receta creada con exito');
        }catch(error){
            console.log(error);
            alert(`NO se pudo crear la receta `);
        }
    }
}


export function getDatabase () {
    return async (dispatch) => {
        try{
            const response = await axios.get(`http://localhost:3001/database`);
            const data = response.data;
            dispatch({type: GET_DATABASE, payload: data});
        }catch(error){
            console.log(error);
            alert(error.message);
        }
    }
}


export function order (order) {
    return  (dispatch) => {
        console.log('order en la action-> ', order)
        dispatch({type: ORDER_RECIPES, payload: order});
    }
}



export function getRecipeByName(name){
    return  async (dispatch) => {
        try{
            const response = await axios.get();
            const data = response.data;
            dispatch({type: GET_RECIPE_NAME, payload: name})
        }catch(error){
            console.log(error);
        }
    }
}