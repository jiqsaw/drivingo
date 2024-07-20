import { Preferences } from "@capacitor/preferences";
import { IStoreUI } from "@drivingo/models";
import { createSlice, PayloadAction, configureStore, createAsyncThunk } from "@reduxjs/toolkit";

const getInitialTheme = async (): Promise<string> => {
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const { value } = await Preferences.get({ key: 'app-theme' });

  if (value) {
    theme = value;
  }
  return theme;
}

export const fetchInitialTheme = createAsyncThunk('ui/fetchInitialTheme',
  async () => {
    const theme = await getInitialTheme();
    return theme;
  }
);

export const changeTheme = createAsyncThunk('ui/changeTheme',
  async (newTheme: IStoreUI["theme"], { dispatch }) => {
    await Preferences.set({ key: 'app-theme', value: newTheme });
    dispatch(setTheme(newTheme));
  }
);

export const uiInitialState: IStoreUI = {
  theme: 'light',
  quickTestNumberOfQuestions: 10,
  hideMockTestIntroduction: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setTheme: (state, action: PayloadAction<IStoreUI["theme"]>) => {
      state.theme = action.payload as IStoreUI["theme"];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialTheme.fulfilled, (state, action) => {
      state.theme = action.payload as IStoreUI["theme"];
    });
  }
});

export const { setTheme } = uiSlice.actions;
export const selectUi = (state: { ui: IStoreUI }) => state.ui;

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer
  }
});

// store.dispatch(fetchInitialTheme());

export default store;
