import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import PopularSeries from './Views/Series/Popular Series/popularSeries';
//import Nav from './Components/Nav/nav';
//import Detail from './Views/Detail/detail';
//import About from './Views/About/about';
import Home from './Views/Home/home';
//import Create from './Views/Form/form';

function App() {
  // const location = useLocation();

  return (
    <div className="App">
      <Routes>
        {/* { location.pathname !== "/"} */}

        <Route path="/home" element={<Home/>}/>

        <Route path="/popular_series" element={<PopularSeries/>}/>

        {/* <Route path="/detail/:id" component={Detail}/> */}

        {/* <Route path="/create" component={Create}/> */}

        {/* <Route path="/about" component={About}/> */}

      </Routes>

    </div>
  );
}

export default App;