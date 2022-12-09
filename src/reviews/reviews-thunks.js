import {createAsyncThunk} from "@reduxjs/toolkit";
import {createReview, findReviewsByAuthor, findReviewsByPlace} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReviewThunk',
    async (review) => createReview(review)
)
export const findReviewsByPlaceThunk = createAsyncThunk(
    'findReviewsByCityThunk',
    async (placeID) => findReviewsByPlace(placeID)

)
export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author) => findReviewsByAuthor(author)
)