import Cards from "../../../Components/Cards/Movies/movieCards";
import { useSelector } from "react-redux";
import SearchSelector from "../../../Components/Searched Items/selectedSearch";


const SearchedMovies =() => {
    //const dispatch = useDispatch();
    const moviesByName = useSelector((state) => state.moviesByName);

        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <SearchSelector/>
        <div>
            <Cards movies={moviesByName} /> 
        </div>   
      </div>
    );
  }
  
  export default SearchedMovies;