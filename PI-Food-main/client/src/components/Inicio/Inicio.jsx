import {Link}  from 'react-router-dom';
import './Inicio.css';

const Inicio = () =>{

    return(
        <div className="landing-page">
            <h1 className='saludo'>Bienvenidos a la app de recetas!</h1>
            <h2 className='title2'>Que cocinaras hoy...</h2>
            <div className='image'>
            <img 
            src="https://w7.pngwing.com/pngs/777/495/png-transparent-kitchen-cook-restaurant-chef-vinyl-group-kitchen-miscellaneous-kitchen-food.png" 
            alt="imagen" />
            
            </div>
           
            <Link to='/home'>
                <button>Ingresar</button>
            </Link>

        </div>
    )
};

export default Inicio;