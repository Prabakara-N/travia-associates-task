import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./features/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventSlice,
  },
});
