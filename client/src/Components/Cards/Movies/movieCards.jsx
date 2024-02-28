import Card from "../../Card/Movies/movieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useEffect, useState } from "react";

const Cards = ({ movies }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (movies.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [movies]);
      console.log(movies.length);
    
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center m-5 grid gap-4">            
            { dataLoaded ? (
                movies?.map((movie) => {
                    return (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            image={movie.image}
                            release={movie.release}
                            rating={movie.rating}
                            // genres={videogame.genres}
                        />
                    )
                })
                ) :
                <h1>Loading...</h1>
                
            }
        </div>
    )
};

export default Cards;