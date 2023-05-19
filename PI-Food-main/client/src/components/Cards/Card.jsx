import './Card.css'
import data from '../../utils/data'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from '../../redux/actions';


const Card = () => {
    
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes())
    },[]);

    return(
        <div className="card">
           {
           recipes.map(el=>(
            <div key={el.id}>
                <Link to={`/recipes/${el.id}`}>
                <h1>{el.title}</h1>
                <h1>{el.name}</h1>
                </Link>
                <img src={el.image} alt="receta" />
                <h2>{el.diets}</h2>
            </div>
           ))}
        </div>
    )
   
};


export default Card;


