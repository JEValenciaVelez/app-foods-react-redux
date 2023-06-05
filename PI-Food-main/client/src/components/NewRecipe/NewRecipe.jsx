
import { Link } from 'react-router-dom';
import './NewRecipe.css'
import data from '../../utils/data'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRecipe } from '../../redux/actions';




const NewRecipe = () => {

    const [inputs, setInputs] = useState({
        name: '',
        image: '',
        summary: '',
        healthScore:0,
        steps:'',
        diets: []
    });

    const [errors, setErrors] = useState({
        name: '',
        image: '',
        summary: '',
        healthScore:0,
        steps:'',
        diets: ''
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        if(e.target.name === 'diets'){
            setInputs({
                ...inputs,
                [e.target.name]: [e.target.value]
            });
            console.log(inputs);
        }else{
            setInputs({
                ...inputs,
                [e.target.name]: e.target.value
            });
            console.log(inputs);
        }
       
    };

    const validate = (input) => {
        const errors = {};
        if(!inputs.name) errors.name = 'Falta nombre';
        if(!inputs.image) errors.image = 'Falta url de imagen';
        if(!inputs.summary) errors.summary = 'Falta descripcion del plato';
        if(!inputs.healthScore) errors.healthScore = 'falta puntuacion';
        if(!inputs.steps) errors.steps = 'Falta instrucciones del plato';
        if(!inputs.diets)  errors.diets = 'Falta tipo de dietas';

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
       if(Object.keys(validate(inputs)).length>0){
        alert('Llena todos los campos');
        return errors;
       }
       else dispatch(postRecipe(inputs));
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
            {/* {errors.name && <p className='error'>{errors.name}</p>} */}
            <label htmlFor="image">imagen</label>
            <input 
            type="text" 
            placeholder='url de la imagen' 
            name='image'
            onChange={handleChange}
            />
            {/* {errors.image && <p className='error'>{errors.image}</p>} */}
            <label htmlFor="summary">Detalle del plato</label>
            <textarea 
            name="summary" 
            id="" 
            cols="30" 
            rows="10" 
            onChange={handleChange}
            placeholder='Describe el plato'></textarea>
             {/* {errors.summary && <p className='error'>{errors.summary}</p>} */}
            <label htmlFor="healtscore">puntuacion saludable</label>
            <input 
            type='number' 
            name='healthScore' 
            placeholder='Numero de 1 a 100'
            onChange={handleChange}
            />
             {/* {errors.healtScore && <p className='error'>{errors.healtScore}</p>} */}
            <label htmlFor="steps">Paso a paso</label>
            <textarea 
            name="steps" 
            id="" cols="30" 
            rows="10"
            onChange={handleChange}
            ></textarea>
             {/* {errors.steps && <p className='error'>{errors.steps}</p>} */}
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