import {useDispatch, useSelector} from "react-redux";
import {findAllMoviesThunk} from "./movies-thunks";
import {useEffect} from "react";

const Movies =()=>{
  const movies = useSelector(state=>state.movies)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(findAllMoviesThunk())
  },[])
    return(
        <>
          <h1>Hello Movies</h1>
          <ul>
            {
              movies.map(movie=>
                <li key = {movie._id}>
                  {movie.title}
                </li>
              )

            }

          </ul>

        </>
    )
}

export default Movies;