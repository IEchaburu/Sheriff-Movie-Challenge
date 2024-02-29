import Cards from "../../Components/Cards/Movies/movieCards";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieGenres, getPopularMovies } from "../../Redux/Actions/Movies/movieActions";



const Home =() => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((state) => state.popularMovies);
    const movieGenres = useSelector((state) => state.movieGenres);
    
    useEffect(() => {
        dispatch(getMovieGenres());
        dispatch(getPopularMovies());
    }, [dispatch]);
    
        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <div>
            <Cards movies={popularMovies} genres={movieGenres} /> 
        </div>   
      </div>
    );
  }
  
  export default Home;