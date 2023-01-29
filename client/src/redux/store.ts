import { configureStore } from "@reduxjs/toolkit";

import notes from "./notes/reducers";

export const store = configureStore({
  reducer: {
    notes: notes,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
