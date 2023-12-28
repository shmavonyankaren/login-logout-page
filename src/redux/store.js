import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "./events/eventsSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    events: eventsSlice,
  },
});
