import { Link } from "react-router-dom";
//import SearchBar from "../Search Bar/searchBar";

const Nav = () => {
    return (
        <div>
            <div>
                <Link to="/home">Home</Link>
            </div>

            <div>
                <Link to="/top_rated_movies">PopularM</Link>
            </div>

            <div>
                <Link to="/popular_series">PopularS</Link>
            </div>

            <div>
                <Link to="/top_rated_series">TopRatedS</Link>
            </div>
        </div>
    )
}

export default Nav;