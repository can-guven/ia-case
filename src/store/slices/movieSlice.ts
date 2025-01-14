/** Dependencies */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

/** Helpers */
import client from "../../rest/service";

/** Types */
import { MovieFilters } from "../../types/api/movie";

const initialState: any = {
  list: {
    data: [],
    loading: false,
    error: null,
    filters: {
      page: 0,
      name: "Pokemon",
      type: "",
      year: "",
    },
    count: 0,
  },
  detail: {
    data: null,
    loading: false,
    error: null,
  },
};

export const fetchMoviesAsync: any = createAsyncThunk(
  "movie/fetchMoviesAsync",
  async (filters: MovieFilters, thunkAPI) => {
    try {
      return await client.movies.search({
        s: filters.name,
        type: filters.type ? filters.type : undefined,
        y: filters.year ? filters.year : undefined,
        page: filters.page + 1,
      });
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchMovieByIdAsync: any = createAsyncThunk(
  "movie/fetchMovieByIdAsync",
  async (IMDbId: string, thunkAPI) => {
    try {
      const response = await client.movies.getById(IMDbId);
      if (response?.Error) {
        return thunkAPI.rejectWithValue(response?.Error);
      }
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setFilters: (state: any, action) => {
      state.list.filters = {
        ...state.list.filters,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.list.loading = true;
        state.list.error = null;
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.list.loading = false;
        state.list.data = action.payload.Search || [];
        state.list.count = action.payload.totalResults || 0;
      })
      .addCase(fetchMoviesAsync.rejected, (state, action) => {
        state.list.loading = false;
        state.list.error = action.payload;
      });

    builder
      .addCase(fetchMovieByIdAsync.pending, (state) => {
        state.detail.loading = true;
        state.detail.error = null;
      })
      .addCase(fetchMovieByIdAsync.fulfilled, (state, action) => {
        state.detail.loading = false;
        state.detail.data = action.payload || null;
      })
      .addCase(fetchMovieByIdAsync.rejected, (state, action) => {
        state.detail.loading = false;
        state.detail.data = null;
        state.detail.error = action.payload;
      });
  },
});

export const { setFilters } = movieSlice.actions;

export default movieSlice.reducer;
