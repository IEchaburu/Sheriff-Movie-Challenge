import { Link } from 'react-router-dom';


const Card = (props) => {
    
    // let genres = [];
    
    // props.genres?.forEach((genre) => {
    //     generos.push(genre.name)
    // })


    return (
        <div>
            <div>
                <Link to={`/serie_detail/${props.id}`}>
                    <p>{props.name}</p>
                </Link>
            </div>
            <section>
                <img src={"https://image.tmdb.org/t/p/w500/"+ props.image} alt={props.name}/>
            </section>
            {/* <p>{generos.join(", ")}</p> */}
        </div>
    )
}

export default Card;