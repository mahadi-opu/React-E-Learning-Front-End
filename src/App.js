import { Route, Routes } from 'react-router-dom';
import routes from './Components/Routes/Routes';
import './App.css';
import '../src/Assets/CSS/Partials/Responsive.css';
import React from 'react';



function App() {
  return (
    <div className="App">
        <Routes> 
          {
            routes.map((route,index) => {
                const {path, element, isPrivate} = route;
                return ( isPrivate ? '' : <Route key={index} path={path} element={element} />);
            })
          }
        </Routes> 
    </div>
  );
}

export default App; 
