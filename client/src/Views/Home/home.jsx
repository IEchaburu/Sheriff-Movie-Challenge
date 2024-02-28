import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



const Home =() => {
    
    // useEffect(() => {
    //     dispatch(getGenres());
    //     dispatch(getAllVideogames());
    // }, [dispatch]);
    
        
    return (
      <div>
        <h2>UMOVIE</h2>
        <div>
            <Cards movies={currentVg} /> 
        </div>   
      </div>
    );
  }
  
  export default Home;