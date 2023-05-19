import { CREATE_RECIPE, DELETE_RECIPE, GET_RECIPES } from "./action-types";


//Creamos el estado inicial
const initialState = {
   recipes: [],
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

        case CREATE_RECIPE:
            
             return {
                ...state,
                recipes: [...state.recipes, ...payload]
            } 

        case DELETE_RECIPE:

            return {
                ...state,
                recipes: state.recipes.filter(rec=> rec.name !== payload)
            }    
        
        default:
            
            return state;    
            
    }
}
//Exportamos el reducer
export default rootReducer;