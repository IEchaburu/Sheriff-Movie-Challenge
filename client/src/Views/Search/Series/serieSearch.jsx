import Cards from "../../../Components/Cards/Series/seriesCards";
import { useSelector } from "react-redux";
import SearchSelector from "../../../Components/Searched Items/selectedSearch";


const SearchedSeries =() => {
    //const dispatch = useDispatch();
    const seriesByName = useSelector((state) => state.seriesByName);

        
    return (
      <div>
        {/* <h2>UMOVIE</h2> */}
        <SearchSelector/>
        <div>
            <Cards series={seriesByName} /> 
        </div>   
      </div>
    );
  }
  
  export default SearchedSeries;