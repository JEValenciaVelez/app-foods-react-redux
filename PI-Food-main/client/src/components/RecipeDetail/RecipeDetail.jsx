
import './RecipeDetail.css';
import { Link, useParams } from 'react-router-dom';
import './RecipeDetail.css';
import data from '../../utils/data';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipes } from '../../redux/actions';


const RecipeDetail = ()=> {

    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(getRecipes());
    },[]);

    const findRecipe = recipes.find(rec=> rec.id === id);
    

    return(
        <div className='detail'>
            <h1 className='detail-name'>{findRecipe.name}</h1>
            <img src={findRecipe.image} alt="" />
            <h2>{findRecipe.summary}</h2>
            <h2>Healtscore: {findRecipe.healthScore}</h2>
            <h2>{findRecipe.diets}</h2>
            <Link to={`/home`}>
            <h1>Volver</h1>
            </Link>

        </div>
    )

};

export default RecipeDetail;