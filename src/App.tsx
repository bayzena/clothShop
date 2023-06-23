import React from 'react';

import { Routes, Route } from "react-router-dom";
import SweatshirtContainer from "./containers/SweatshirtContainer/SweatshirtContainer";
import TShirtsContainer from "./containers/TShirtsContainer/TShirtsContainer";
import TrousersContainer from "./containers/TrousersContainer/TrousersContainer";
import Header from "./containers/HeaderContainer/HeaderContainer";
import Shorts from "./containers/ShortsContainer/ShortsContainer";
import MainContent from "./containers/HeaderContainer/MainContent/MainContent";
import './App.css';

const routes = [
        {
            path: '/',
            element: <MainContent/>
        },
        {
            path: '/sweatshirt',
            element: <SweatshirtContainer/>
        },
        {
            path: '/t-shirt',
            element: <TShirtsContainer/>
        },
        {
            path: '/shorts',
            element: <Shorts/>
        },
        {
            path: '/trousers',
            element: <TrousersContainer/>
        },
    ]


function App() {
  return (
      <Routes>
        <Route path='/' element={<Header />} >
          {routes.map((path) => (
            <Route key={path.path} path={path.path} element={path.element}/>
          ))}
        </Route>
      </Routes>
  );
}

export default App;
