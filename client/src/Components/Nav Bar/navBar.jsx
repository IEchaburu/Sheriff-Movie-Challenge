import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Nav.css';


//import SearchBar from "../Search Bar/searchBar";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Movies
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="http://localhost:3000/home">
                                        Popular
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="http://localhost:3000/top_rated_movies">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Series
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="http://localhost:3000/popular_series">
                                        Popular
                                    </a>
                                </li>
                                <li><a className="dropdown-item" href="http://localhost:3000/top_rated_series">
                                        Top Rated
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;