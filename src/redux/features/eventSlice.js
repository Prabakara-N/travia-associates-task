import { createSlice } from "@reduxjs/toolkit";
import { events } from "../../data";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: events,
    singleEvent: {},
    loading: false,
    day: [],
    selectedDay: 1,
  },
  reducers: {
    setEvent: (state, action) => {
      const singleEvent = state.events.find(
        (event) => event.id === action.payload
      );
      state.singleEvent = singleEvent;
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

    setDay: (state, action) => {
      if (action.payload === 1) {
        state.day = state.singleEvent.eventSchedule.dayOne;
      } else if (action.payload === 2) {
        state.day = state.singleEvent.eventSchedule.dayTwo;
      } else if (action.payload === 3) {
        state.day = state.singleEvent.eventSchedule.dayThree;
      }
    },

    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const { setEvent, setSearchQuery, setLoading, setDay, setSelectedDay } =
  eventSlice.actions;
