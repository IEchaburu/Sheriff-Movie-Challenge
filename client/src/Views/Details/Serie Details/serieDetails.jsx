import { useEffect } from "react";
import { getSerieId } from "../../../Redux/Actions/Series/seriesActions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";



const SerieDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const serie = useSelector((state) => state.serieByID);

    useEffect(() => {
        dispatch(getSerieId(id));
    },[dispatch, id]);

    if (!serie) {
        return <div>Loading...</div>; 
    };

    const regex = /<\/?[a-z][\s\S]*?>/ig;
    const description = serie.description?.replace(regex,"");

    let sGenres = [];
    serie.genres?.forEach((genre) => {
        sGenres.push(genre.name)
    });


    let sCast = [];
    if (!serie.cast) {
        sCast = "There is no information about the cast"
    }  else {
        serie.cast?.forEach((element) => {
            sCast.push(element.name + ', ');
        })
    }


    return (
        <div>
        <div>
          <div>
            <img src={"https://image.tmdb.org/t/p/w500/"+ serie?.image} alt={serie.name}/>
          </div>
          <h5>ID : {serie?.id}</h5>

          <h5>Genres: {sGenres?.join(" , ")}</h5>
          
          <h5>Cast: {sCast}</h5>
         
          <h5>Rating : {serie?.rating}</h5>
  
          <h5>Release : {serie?.release}</h5>
  
        </div>
        <div>
          <section>
            <h3>{serie.name}</h3>
          </section>
          <p>{description}</p>
        </div>
      </div>
        
    )
};

export default SerieDetail;