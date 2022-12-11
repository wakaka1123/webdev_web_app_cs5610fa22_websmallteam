import {createAsyncThunk} from "@reduxjs/toolkit";
import {welcomeIndividual,welcomeCorporate} from "./welcome-service";

export const welcomeIndividualThunk = createAsyncThunk(
    'welcomeIndividual',
    ()=>welcomeIndividual()
)

