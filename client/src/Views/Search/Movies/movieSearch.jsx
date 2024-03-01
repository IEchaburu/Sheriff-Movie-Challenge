import Cards from "../../../Components/Cards/Movies/movieCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const SearchedMovies =() => {
    //const dispatch = useDispatch();
    const moviesByName = useSelector((state) => state.moviesByName);

    console.log(moviesByName, 'el estados');
        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={moviesByName} /> 
        </div>   
      </div>
    );
  }
  
  export default SearchedMovies;