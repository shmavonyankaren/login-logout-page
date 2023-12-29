import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [
    {
      id: 1,
      value: "Father's birthday",
      image:
        "https://www.momjunction.com/wp-content/uploads/2018/08/%E2%80%98Happy-Birthday-Dad%E2%80%99-Quotes1.jpg",
    },
    {
      id: 2,
      value: "Mother's birthday",
      image:
        "https://www.quotemantra.com/wp-content/uploads/2020/04/happy-birthday-mother-feature-image.png",
    },
    {
      id: 3,
      value: "Brother's birthday",
      image:
        "https://parade.com/.image/t_share/MTkwNTgxNDczNDIzOTkxOTMz/birthday-messages-for-brother-jpg.jpg",
    },
    {
      id: 4,
      value: "Sister's birthday",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/birthday-wishes-for-sister4-64ba9e489dc68.jpg",
    },
    {
      id: 5,
      value: "My birthday",
      image:
        "https://img.freepik.com/premium-vector/its-my-birthday_749935-686.jpg?w=2000",
    },
    {
      id: 6,
      value: "New Year",
      image:
        "https://resolutiondenver.com/wp-content/uploads/2021/11/History-of-New-Years-Eve.jpg",
    },
  ],
};

const reducers = {
  addEvent: (state, action) => {
    state.events.push(action.payload);
  },
  deletEvent: (state, action) => {
    state.events = state.events.filter((event) => event.id !== action.payload);
  },
  updateEvent: (state, action) => {
    state.events = state.events.map((event) => {
      if (event.id === action.payload.id) {
        return action.payload;
      }

      return event;
    });
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
