import { configureStore, combineReducers } from "@reduxjs/toolkit";
import taskSlice from "./tasks";
import screenSlice from "./screens";

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
    screens: screenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
