import { CREATE_RECIPE, DELETE_RECIPE, GET_DATABASE, GET_RECIPES, GET_RECIPE_DETAIL, GET_RECIPE_NAME, ORDER_RECIPES } from "./action-types";


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

    case GET_RECIPE_NAME:
        return {
            ...state,
            recipes: [...state.recipes].filter(rec=>rec.name.split(' ').includes(payload))
        }

    case ORDER_RECIPES:
        switch (payload){
            case 'A-Z':
                
                return {
                    ...state,
                    recipes: [...state.recipes].sort((a,b)=>a.name.charAt(0).localeCompare(b.name.charAt(0)))
                }

            case 'Z-A':
                return {
                    ...state,
                    recipes: [...state.recipes].sort((a,b)=>b.name.charAt(0).localeCompare(a.name.charAt(0)))
                }

            case 'des':
                return {
                    ...state,
                    recipes: [...state.recipes].sort((a,b)=> b.healthScore - a.healthScore) 
                }

            case 'asc':
                return {
                    ...state,
                    recipes: [...state.recipes].sort((a,b)=>a.healthScore - b.healthScore)
                }
            
        }

    default:
        return state;
   }
}
//Exportamos el reducer
export default rootReducer;