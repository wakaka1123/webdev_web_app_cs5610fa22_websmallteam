import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "./omdb-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";

const OmdbSearch = () =>{
    const [searchTerm,setSearchTerm] = useState('Avatar')
    const {movies,loading} = useSelector((state)=>state.omdb)

    const dispatch = useDispatch()
    // useEffect(()=>{
    //   if(searchTerm){
    //     dispatch(findMovieBySearchTermThunk(searchTerm))
    //   }
    //     },[movies])
    return(
        <>
          <h1>Omdb Search</h1>
          <input
              onChange={(e)=>{
                setSearchTerm(e.target.value)
              }}
              value={searchTerm}/>
          <button onClick={()=>{
            dispatch(findMovieBySearchTermThunk(searchTerm))
          }}>Search</button>
          <ul>
            {movies.map((movie)=>
              <li key={movie.imdbID}>
                <button onClick={()=>{
                    dispatch(userLikesMovieThunk({uid:111,mid:movie.imdbID}))
                }}>Like</button>


                {movie.Title}
              </li>
            )}

          </ul>

        </>
    )
}

export default OmdbSearch