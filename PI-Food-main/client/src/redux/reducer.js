import { CREATE_RECIPE, DELETE_RECIPE, GET_DATABASE, GET_RECIPES, GET_RECIPE_DETAIL } from "./action-types";


//Creamos el estado inicial
const initialState = {
   recipes: [],
   recipeDetail: {},
   recipeDeleted: [],
   posts: []
};

//Creamos el reducer
function rootReducer(state = initialState, { type, payload }) {
    //Switch case por los recipes
   switch(type){
    case GET_RECIPES:
        return {
            ...state,
            recipes: payload
        }

    case GET_RECIPE_DETAIL:
        return {
            ...state,
            recipeDetail: payload
        }  
        
    case DELETE_RECIPE:
        return {
            ...state,
            recipeDeleted: [...state.recipeDeleted, payload]
        }

    case CREATE_RECIPE:
        return {
            ...state,
            posts: [...state.posts, payload]
        }

    case GET_DATABASE:
        return {
            ...state,
            recipes: payload
        }

    default:
        return state;
   }
}
//Exportamos el reducer
export default rootReducer;