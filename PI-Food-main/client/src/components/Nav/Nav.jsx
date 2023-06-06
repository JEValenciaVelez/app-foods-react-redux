import { getDatabase, getRecipes, order } from '../../redux/actions';
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

        case 'A-Z':
            dispatch(order(e.target.name));
            break;

        case 'Z-A':
            dispatch(order(e.target.name));
            break;

        case 'des':
            dispatch(order(e.target.name));
            break;

        case 'asc':
            dispatch(order(e.target.name));
            break;

       }
       

    };

    return (
        <nav className="nav">
            <button name='api' onClick={handleClick}>api</button>
            <button name='database' onClick={handleClick}>database</button>
            <button name='A-Z' onClick={handleClick}>ordenar A-Z </button>
            <button name='Z-A' onClick={handleClick}>ordenar Z-A </button>
            <button name='des' onClick={handleClick}>ordenar saludable desc</button>
            <button name='asc' onClick={handleClick}>ordenar salucdable asc</button>
        </nav>
    )
};

export default Nav;