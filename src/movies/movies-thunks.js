import {createAsyncThunk} from "@reduxjs/toolkit";
import {createMovie, findAllMovies} from "./movies-service";

export const createMoviesThunk =createAsyncThunk(
    'createMovie',
    ()=>createMovie()
)


export const findAllMoviesThunk = createAsyncThunk(
    'findAllMovies',
    ()=>findAllMovies()
)

export const updateMovieThunk = {}
export const deleteMovieThunk = {}