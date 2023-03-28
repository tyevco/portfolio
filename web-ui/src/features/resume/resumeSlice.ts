import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ResumeData } from "./resumeModels";
import { fetchResume } from "./resumeAPI";

export interface ResumeState {
    data?: ResumeData;
    status: 'idle' | 'loading' | 'failed';
};

const initialState: ResumeState = {
    status: "idle",
};

export const loadAsync = createAsyncThunk(
    'resume/load',
    async (resumeId?: string) => {
        const response = await fetchResume(resumeId!);

        return response.data;
    }
)


export const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadAsync.pending, state => {
                state.status = "loading";
            })
            .addCase(loadAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.data = action.payload;
            })
            .addCase(loadAsync.rejected, state => {
                state.status = "failed";
            })
    }
});

//export const { load } = resumeSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectResume = (state: RootState) => state.resume.data!;
export const selectStatus = (state: RootState) => state.resume.status;

export default resumeSlice.reducer;