import './Card.css'
import { Link } from "react-router-dom";



const Card = ({recipes}) => {
    
   const listRecipes = recipes.length >0 ? recipes : [];
    return(
        <div className="cards">
            {
              listRecipes.length ?
              listRecipes.map(rec => (
                <div className='card' key={rec.id}>
                    <h1>{rec.title}</h1>
                    <h1>{rec.name}</h1>
                    <Link to={`/recipes/${rec.id}`}>
                    <img src={rec.image} alt="imagen" />
                    </Link>
                    <h3>{rec.diets}</h3>
                </div>
              ))
              : 
              <h1>No hay respuesta</h1> 
            }
        </div>
    )
   
};


export default Card;


