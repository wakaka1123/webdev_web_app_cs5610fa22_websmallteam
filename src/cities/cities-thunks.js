import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllCities, createCity, findCityById} from "./cities-service";

export const createCitiesThunk = createAsyncThunk(
    'createCity',
    (newCity) => createCity(newCity)
)

export const findAllCitiesThunk = createAsyncThunk(
    'findAllCities',
    () => findAllCities()
)

export const findCityByIdThunk = createAsyncThunk(
    'findCityById',
    async (cityID) => await findCityById(cityID)
)