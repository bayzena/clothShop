import React from "react";
import MainContent from "../components/HeaderComponent/MainContent/MainContent";
import SweatshirtContainer from "../containers/SweatshirtContentContainer/SweatshirtContainer";
import TShirtsContainer from "containers/TShirtsContentContainer/TShirtsContainer";
import Shorts from "../containers/ShortsContentContainer/ShortsContainer";
import TrousersContainer from "../containers/TrousersContentContainer/TrousersContainer";
import { MAIN, SHORTS, SWEATSHIRT, T_SHIRT, TROUSERS } from "../constants";

export const pages = [
  {
    path: MAIN,
    element: <MainContent />,
  },
  {
    path: SWEATSHIRT,
    element: <SweatshirtContainer />,
  },
  {
    path: T_SHIRT,
    element: <TShirtsContainer />,
  },
  {
    path: SHORTS,
    element: <Shorts />,
  },
  {
    path: TROUSERS,
    element: <TrousersContainer />,
  },
];
