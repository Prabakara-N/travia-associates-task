import { createSlice } from "@reduxjs/toolkit";
import { events } from "../../data";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: events,
    singleEvent: {},
    loading: false,
  },
  reducers: {
    setEvent: (state, action) => {
      state.singleEvent = action.payload;
    },
    setSearchQuery: (state, action) => {
      const searchQuery = action.payload.toLowerCase();
      const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(searchQuery)
      );
      state.events = filteredEvents;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { setEvent, setSearchQuery, setLoading } = eventSlice.actions;
