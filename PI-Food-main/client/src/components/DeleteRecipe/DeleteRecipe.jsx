import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";





const DeleteRecipe = () => {

  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e)=> {
    setName(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(deleteRecipe(name));
    alert(`Receta ${name} Eliminada con exito`);
  };
  

    return(
      <div>
        <form className="deleteRecipe" onSubmit={handleSubmit}>
          <span>Escribe el nombre de la receta</span>
          <input 
          placeholder="Ingresa nombre de la receta"
          type="text" 
          name="name"
          onChange={handleChange}
          />
          <button>Enviar</button>
          <Link to={`/home`}>
          <h1>Volver</h1>
          </Link>
        </form>
      </div>
    )
  };
  

export default DeleteRecipe;