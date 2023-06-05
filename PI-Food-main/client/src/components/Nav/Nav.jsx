import { getDatabase, getRecipes } from '../../redux/actions';
import './Nav.css';
import { useDispatch } from 'react-redux';



const Nav = () => {

    const dispatch = useDispatch();
   
    const handleClick = (e) => {
       switch(e.target.name){
        case 'database':
            dispatch(getDatabase());
            break;
        case 'api':
            dispatch(getRecipes());
            break;

       }
       

    };

    return (
        <nav className="nav">
            <button name='api' onClick={handleClick}>api</button>
            <button name='database' onClick={handleClick}>database</button>
            <button>ordenar A-Z </button>
            <button>ordenar Z-A </button>
            <button>ordenar saludable desc</button>
            <button>ordenar salucdable asc</button>
        </nav>
    )
};

export default Nav;