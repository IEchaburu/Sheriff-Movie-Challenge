import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import PopularSeries from './Views/Series/Popular Series/popularSeries';
import Home from './Views/Home/home';
import TopRatedSeries from './Views/Series/Top Rated Series/topRatedSeries';
import TopRatedMovies from './Views/Movies/topRatedMovies';



function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Routes>
        {/* { location.pathname !== "/"} */}

        <Route path="/home" element={<Home/>}/>

        <Route path="/popular_series" element={<PopularSeries/>}/>

        <Route path="/top_rated_series" element={<TopRatedSeries/>}/>

        <Route path="/top_rated_movies" element={<TopRatedMovies/>}/>



        {/* <Route path="/detail/:id" component={Detail}/> */}

        {/* <Route path="/create" component={Create}/> */}

        {/* <Route path="/about" component={About}/> */}

      </Routes>

    </div>
  );
}

export default App;