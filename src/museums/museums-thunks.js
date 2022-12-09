import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllMuseums, createMuseum, findMuseumById} from "./museums-service";
import {findCityById} from "../cities/cities-service";

export const createMuseumThunk = createAsyncThunk(
    'createMuseum',
    (newCity) => createMuseum(newCity)
)

export const findAllMuseumsThunk = createAsyncThunk(
    'findAllMuseums',
    () => findAllMuseums()
)
export const findMuseumByIdThunk = createAsyncThunk(
    'findMuseumById',
    async (museumID) => await findMuseumById(museumID)
)