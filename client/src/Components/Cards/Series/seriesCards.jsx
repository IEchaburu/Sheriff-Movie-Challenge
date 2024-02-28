import Card from "../../Card/Series/serieCard";
import { useEffect, useState } from "react";

const Cards = ({ series }) => {
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        if (series.length !== 0) {          
            setDataLoaded(true); 
        } else {
            setDataLoaded(false);
        }
      }, [series]);
      console.log(series.length);
    
    return (
        <div>            
            { dataLoaded ? (
                series?.map((serie) => {
                    return (
                        <Card
                            key={serie.id}
                            id={serie.id}
                            name={serie.name}
                            image={serie.image}
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