// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
//import Landing from './Views/Landing/Landing';
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

        {/* <Route exact path='/' component={Landing}/> */}

        <Route path="/home" element={<Home/>}/>

        {/* <Route path="/detail/:id" component={Detail}/> */}

        {/* <Route path="/create" component={Create}/> */}

        {/* <Route path="/about" component={About}/> */}

      </Routes>

    </div>
  );
}

export default App;