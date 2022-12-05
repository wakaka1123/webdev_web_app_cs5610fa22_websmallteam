import {createAsyncThunk} from "@reduxjs/toolkit";
import {findMovieByImdbId, findMovieBySearchTerm} from "./omdb-service";

export const findMovieBySearchTermThunk = createAsyncThunk(
    'findMovieBySearchTerm',
    (searchTerm)=>findMovieBySearchTerm(searchTerm)
)

export const findMovieByImdbIdThunk = createAsyncThunk(
    'findMovieByImdbId',
    (imdbID)=>findMovieByImdbId(imdbID)
)
