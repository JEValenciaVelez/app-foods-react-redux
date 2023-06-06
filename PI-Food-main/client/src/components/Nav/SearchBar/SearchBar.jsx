import { useState } from 'react';
import './SearchBar.css';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getRecipeByName } from '../../../redux/actions';


const SearchBar = () => {

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e)=> {
        setName(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(name);
        dispatch(getRecipeByName(name));
        
    };
   
    return(
        <div className="search-bar">
            <button onClick={handleSearch}>Buscar tus recetas</button>
            <input 
            type="text" 
            name="search-bar" 
            onChange={handleChange}
            placeholder="busca tus recetas"
            />
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