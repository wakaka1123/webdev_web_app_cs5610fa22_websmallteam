import {useDispatch, useSelector} from "react-redux";
import {
  createMoviesThunk,
  deleteMovieThunk,
  findAllMoviesThunk
} from "./movies-thunks";
import {useEffect, useState} from "react";

const Movies =()=>{
  const movies = useSelector(state=>state.movies)
  const [movie,setMovie] = useState({title:"New Movie"})
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(findAllMoviesThunk())
  },[dispatch])
    return(
        <>
          <h1>Hello Movies</h1>
          <ul>
            <li>
              <input onChange={(e)=>setMovie({...movie,title:e.target.value})}
                  value ={movie.title}/>
              <button onClick={()=>{
                dispatch(createMoviesThunk({
                  title: movie.title
                }))
              }}>Create</button>

            </li>

            {
              movies.map(movie=>
                <li key = {movie._id}>
                  {movie.title}
                  <button className="float-end" onClick={()=>{
                    dispatch(deleteMovieThunk(movie._id))
                  }}>Delete</button>

                </li>
              )

            }

          </ul>

        </>
    )
}

export default Movies;