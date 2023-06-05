
import './RecipeDetail.css';
import { Link, useParams } from 'react-router-dom';
import './RecipeDetail.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { detail } from '../../redux/actions';



const RecipeDetail = ()=> {

    const recipe = useSelector(state=>state.recipeDetail);
    const dispatch = useDispatch();
    const {id} = useParams();
    // console.log('id que entra por params',id);

    useEffect(()=>{
        dispatch(detail(id));
    },[id,dispatch])
    
   

    return(
        <div className='detail'>
            <h1 className='detail-name'>{recipe.title}</h1>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt="" />
            <h2>{recipe.summary}</h2>
            <h2>Healtscore: {recipe.healthScore}</h2>
            <h2>{recipe.diets}</h2>
            <h3>{recipe.steps}</h3>
            <Link to={`/home`}>
            <h1>Volver</h1>
            </Link>

        </div>
    )

};

export default RecipeDetail;