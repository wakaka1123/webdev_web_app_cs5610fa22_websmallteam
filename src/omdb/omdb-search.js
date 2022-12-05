import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findMovieBySearchTermThunk} from "./omdb-thunks";
import {userLikesMovieThunk} from "../likes/likes-thunks";
import OmNav from "./omNav";
import {Link} from "react-router-dom";

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
          <OmNav/>
          <h1>Omdb Search</h1>
          <input
              onChange={(e)=>{
                setSearchTerm(e.target.value)
              }}
              value={searchTerm}/>
          <button onClick={()=>{
            dispatch(findMovieBySearchTermThunk(searchTerm))
          }}>Search</button>
          <ul className="list-group">
            {movies.map((movie)=>
              <li key={movie.imdbID} className="list-group-item">
                <button className="float-end">Dislike</button>
                <button className="float-end" onClick={()=>{
                    dispatch(userLikesMovieThunk({uid:111,mid:movie.imdbID}))
                }}>Like</button>

                <img src={movie.Poster} height={50}/>
                <Link to={`/movies/details/${movie.imdbID}`}>
                {movie.Title}
                </Link>
              </li>
            )}

          </ul>

        </>
    )
}

export default OmdbSearch