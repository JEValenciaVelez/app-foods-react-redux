
import { Link } from 'react-router-dom';
import './NewRecipe.css'
import data from '../../utils/data';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../../redux/actions';
import axios from 'axios';




const NewRecipe = () => {

    const [inputs, setInputs] = useState({
        name:'',
        image: '',
        summary: '',
        healtScore:0,
        steps: '',
        diets:''
    });

    const [errors , setErrors] = useState({
        name:'',
        image: '',
        summary: '',
        healtScore:0,
        steps: '',
        diets:''
    })

    const validate = (input) => {
        const errors = {};
        if(!input.name) errors.name = 'Se requiere nombre';
        if(!input.image) errors.image = 'Se requiere url de imagen';
        if(!input.summary) errors.summary = 'Se requiere detalle de la receta';
        if(!input.healtScore) errors.healtScore = 'Se requiere puntaje saludable';

        return errors;
    };

    const handleChange = (e)=>{
       
        const value =  e.target.value ;
        const name = e.target.name;

        setInputs({
            ...inputs,
            [name]: value
        });

        setErrors(validate(inputs));
    };

    const dispatch = useDispatch();
    

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(inputs, errors);
        console.log(JSON.stringify(inputs))

        if(Object.keys(errors).length===0){
            dispatch(createRecipe(inputs));
            return inputs;
        }

        return alert('LLena todos los campos');
    };

    


    return (
        <form action="" className='form-newRecipe' onSubmit={handleSubmit}>
            <h1>Nueva receta</h1>
            <label htmlFor="name">Nombre</label>
            <input 
            type="text" 
            placeholder='nombre de la receta' 
            name='name'
            onChange={handleChange}
            />
            {errors.name && <p className='error'>{errors.name}</p>}
            <label htmlFor="image">imagen</label>
            <input 
            type="text" 
            placeholder='url de la imagen' 
            name='image'
            onChange={handleChange}
            />
            {errors.image && <p className='error'>{errors.image}</p>}
            <label htmlFor="summary">Detalle del plato</label>
            <textarea 
            name="summary" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={handleChange}
            placeholder='Describe el plato'></textarea>
             {errors.summary && <p className='error'>{errors.summary}</p>}
            <label htmlFor="healtscore">puntuacion saludable</label>
            <input 
            type='number' 
            name='healtScore' 
            placeholder='Numero de 1 a 100'
            onChange={handleChange}
            />
             {errors.healtScore && <p className='error'>{errors.healtScore}</p>}
            <label htmlFor="steps">Paso a paso</label>
            <textarea 
            name="steps" 
            id="" cols="30" 
            rows="10"
            onChange={handleChange}
            ></textarea>
             {errors.steps && <p className='error'>{errors.steps}</p>}
            <h3>Dietas</h3>
            {data.map(el=>(
                <label key={el.id}>
                    <input
                     type="checkbox" 
                     name={`diets`}
                     value={el.diets}
                     checked={el.diets.includes(inputs.diets) }
                     onChange={handleChange}
                     />
                     {el.diets.join(', ')}
                </label>
            ))}
            <button>Enviar</button>
            <Link to={`/home`}>
            <h1>Volver</h1>
            </Link>
        </form>
    )

};

export default NewRecipe;