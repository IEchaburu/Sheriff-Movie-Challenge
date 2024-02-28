import { useEffect } from "react";
import { getMovieId } from "../../../Redux/Actions/Movies/movieActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const MovieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movieByID);

    useEffect(() => {
        dispatch(getMovieId(id));
    },[dispatch, id]);

    if (!movie) {
        return <div>Loading...</div>; 
    };

    const regex = /<\/?[a-z][\s\S]*?>/ig;
    const description = movie.description?.replace(regex,"");

    let mGenres = [];
    movie.genres?.forEach((genre) => {
        mGenres.push(genre.name)
    });


    let mCast = [];
    if (!movie.cast) {
        mCast = "There is no information about the cast"
    }  else {
        movie.cast?.forEach((element) => {
            mCast.push(element.name + ', ');
        })
    }


    return (
        <div>
        <div>
          <div>
            <img src={"https://image.tmdb.org/t/p/w500/"+ movie?.image} alt={movie.name}/>
          </div>
          <h5>ID : {movie?.id}</h5>

          <h5>Genres: {mGenres?.join(" , ")}</h5>
          
          <h5>Cast: {mCast}</h5>
         
          <h5>Rating : {movie?.rating}</h5>
  
          <h5>Release : {movie?.release}</h5>
  
        </div>
        <div>
          <section>
            <h3>{movie.name}</h3>
          </section>
          <p>{description}</p>
        </div>
      </div>
        
    )
};

export default MovieDetail;