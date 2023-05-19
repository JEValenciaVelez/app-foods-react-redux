import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../redux/actions";
import { Link } from "react-router-dom";





const DeleteRecipe = () => {

  const dispatch = useDispatch();
  let [name, setName] = useState('');
  let [error, setError] = useState('');

  const validate = (name)=>{
    if(!name) error = 'Debe haber nombre';
    if(error.length>0) alert('Debe ingresar nombre');
    return error;
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError(validate(name));
    if(error.length === 0){
      dispatch(deleteRecipe(name));
    }
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