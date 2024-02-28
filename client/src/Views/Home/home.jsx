import Cards from "../../Components/Cards/Movies/movieCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../Redux/Actions/Movies/movieActions";



const Home =() => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((state) => state.popularMovies);
    
    useEffect(() => {
        //dispatch(getGenres());
        dispatch(getPopularMovies());
    }, [dispatch]);
    
        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={popularMovies} /> 
        </div>   
      </div>
    );
  }
  
  export default Home;