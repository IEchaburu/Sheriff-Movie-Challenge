import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './SerieCard.css';


const Card = (props) => {
    
    // let genres = [];
    
    // props.genres?.forEach((genre) => {
    //     generos.push(genre.name)
    // })


    return (
        <div className="card">
            <img src={"https://image.tmdb.org/t/p/w500/"+ props?.image} className="card-img-top" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props?.rating}</p>
                    <a href={`http://localhost:3000/serie_detail/${props.id}`} className="btn btn-primary">Learn More</a>
            </div>
      </div>
    )
}

export default Card;