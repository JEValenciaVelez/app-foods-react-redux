import './SearchBar.css';
import {Link} from 'react-router-dom'


const SearchBar = () => {
   
    return(
        <div className="search-bar">
            <label htmlFor="search-bar">Busca tus recetas</label>
            <input type="text" name="search-bar" placeholder="busca tus recetas"/>
            <Link to={`/recipes/`}>
            <button>Nueva receta</button>
            </Link>
            <Link to={`/deleteRecipe`} >
            <button>Eliminar Receta</button>
            </Link>
            
        </div>
    )
};

export default SearchBar;