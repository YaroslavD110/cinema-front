import * as React from "react";

// Components
import SearchStep from "./SearchStep";

// ** Config
export const steps = [
  {
    title: "Search",
    Component: SearchStep
  }
];

// ** Context
export const CreateFilmContext = React.createContext({
  currentStep: 0
});

export const CreateFilmContextProvider = CreateFilmContext.Provider;
export const CreateFilmContextConsumer = CreateFilmContext.Consumer;
