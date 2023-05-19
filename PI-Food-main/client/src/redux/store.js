
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
//Importamos todo lo necesario para crear el Store.

const store = createStore(rootReducer,applyMiddleware(thunk));
//Exportamos el store
export default store;