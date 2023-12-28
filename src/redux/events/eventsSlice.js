import { createSlice } from "@reduxjs/toolkit";

const initialState = { events: [] };

const reducers = {
  addEvent: (state, action) => {
    state.events.push(action.payload);
  },
  deletEvent: (state, action) => {
    state.events = state.events.filter(
      (event) => event.id !== action.payload.id
    );
  },
  updateEvent: (state, action) => {
    state.events = state.events.map((event) => {
      if (event.id === action.payload.id) {
        return action.payload;
      }

      return event;
    });
  },
  searchEvent: (state, action) => {
    return state.events.filter((event) => event.id === action.payload.id);
  },
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers,
});

export const { addEvent, deletEvent, updateEvent, searchEvent } =
  eventsSlice.actions;

export default eventsSlice.reducer;
