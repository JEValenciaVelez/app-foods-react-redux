import './Cards.css'
import Card from "./Card";
import Pagination from './Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecipes } from '../../redux/actions';


const Cards = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

    return (
        <div className="cards-container">
            <Card recipes= {recipes.length ? recipes.slice(indexOfFirstItem, indexOfLastItem) : []}/>
            <Pagination
            currentPage={currentPage} 
            itemsPerPage={itemsPerPage} 
            paginate={paginate}
            totalItems={recipes.length>0 ? recipes.length : null}
            />
        </div>
    )
 
};




export default Cards;