import {createAsyncThunk} from "@reduxjs/toolkit";
import {findPlaceBySearchTerm, findPlaceByPlaceId} from "./googleplaces-service";

export const findPlaceBySearchTermThunk = createAsyncThunk(
    'findPlaceBySearchTerm',
    (term) => findPlaceBySearchTerm(term)
)
export const findPlaceByPlaceIdThunk = createAsyncThunk(
    'findPlaceByPlaceId',
    (placeID) => findPlaceByPlaceId(placeID)
)
