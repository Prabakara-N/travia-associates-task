import { createSlice } from "@reduxjs/toolkit";
import { events } from "../../data";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    events: events,
    singleEvent: {},
    day: [],
    selectedDay: 1,
    eventDetails: false,
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

    setEventDetails: (state, action) => {
      state.eventDetails = action.payload;
    },
  },
});

export default eventSlice.reducer;
export const {
  setEvent,
  setSearchQuery,
  setDay,
  setSelectedDay,
  setEventDetails,
} = eventSlice.actions;
