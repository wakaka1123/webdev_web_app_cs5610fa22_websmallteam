import logo from './logo.svg';
import './App.css';
import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
  reducer:{
    movies:moviesReducer
  }
})


function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Movies/>
      </Provider>
    </div>
  );
}

export default App;
