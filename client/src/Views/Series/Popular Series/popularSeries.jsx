import Cards from "../../../Components/Cards/Series/seriesCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularSeries } from '../../../Redux/Actions/Series/seriesActions';



const PopularSeries =() => {
    const dispatch = useDispatch();
    const popularSeries = useSelector((state) => state.popularSeries);
    
    useEffect(() => {
        //dispatch(getGenres());
        dispatch(getPopularSeries());
    }, [dispatch]);
    
        
    return (
      <div>
        <h2>UMOVIE</h2>
        <div>
            <Cards series={popularSeries} /> 
        </div>   
      </div>
    );
  }
  
  export default PopularSeries;