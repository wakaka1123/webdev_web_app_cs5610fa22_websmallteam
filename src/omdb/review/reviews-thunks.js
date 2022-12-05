import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  createReview,
  findReviewsByAuthor,
  findReviewsByMovie
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
    'createReview',
    async (review)=> await createReview(review)
)

export const findReviewsByMovieThunk = createAsyncThunk(
    'findReviewsByMovieThunk',
    async (imdbID)=> await findReviewsByMovie(imdbID)
)

export const findReviewsByAuthorThunk = createAsyncThunk(
    'findReviewsByAuthorThunk',
    async (author)=> await findReviewsByAuthor(author)
)