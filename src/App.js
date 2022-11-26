import './App.css';
import Movies from "./movies";
import moviesReducer from "./movies/movies-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import omdbReducer from "./omdb/omdb-reducer";
import OmdbSearch from "./omdb/omdb-search";
import likesReducer from "./likes/likes-reducer";
import HomePage from "./home";
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from 'react-router';
import Omdb from "./omdb";


const store = configureStore({
  reducer:{
    movies:moviesReducer,
    omdb:omdbReducer,
    likes: likesReducer
  }
})


// function App() {
//   return (
//     <div className="container">
//       <Provider store={store}>
//           <HomePage/>
//             <OmdbSearch/>
//           <Movies/>
//       </Provider>
//     </div>
//
//   );
// }
//
// export default App;


function App() {
  return (

      <BrowserRouter>

        <div className="container">
          <Routes>
            <Route path ="/*" element={<HomePage/>}/>
            <Route path ="/movies/*" element={<Omdb/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );

}
export default App;
