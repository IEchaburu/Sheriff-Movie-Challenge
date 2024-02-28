import Card from "../../Card/Movies/movieCard";
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
        <div>            
            { dataLoaded ? (
                movies?.map((movie) => {
                    return (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            name={movie.name}
                            image={movie.image}
                            // genres={videogame.genres}
                        />
                    )
                })
                ) :
                <h1>Cargando...</h1>
                
            }
        </div>
    )
};

export default Cards;