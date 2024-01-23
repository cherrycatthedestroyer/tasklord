import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import Task from "../models/task";

type TaskInput = { title: string; description: string; due_date: string };

interface TasksState {
  task_list: Task[];
}

const initialState: TasksState = { task_list: [] };

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    ADD_TASK: (state, action: PayloadAction<TaskInput>) => {
      return {
        ...state,
        task_list: [
          ...state.task_list,
          new Task(
            action.payload.title,
            action.payload.description,
            action.payload.due_date
          ),
        ],
      };
    },
    REMOVE_TASK: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        task_list: state.task_list.filter(
          (_, index) => index !== action.payload
        ),
      };
    },
    ADD_SUBTASK: (
      state,
      action: PayloadAction<{ task_id: number; sub_task: string }>
    ) => {
      return {
        ...state,
        task_list: state.task_list.map((task, index) =>
          index === action.payload.task_id
            ? {
                ...task,
                sub_tasks: [...task.sub_tasks, action.payload.sub_task],
              }
            : task
        ),
      };
    },
    REMOVE_SUBTASK: (
      state,
      action: PayloadAction<{ task_id: number; sub_task_id: number }>
    ) => {
      return {
        ...state,
        task_list: state.task_list.map((task, index) =>
          index === action.payload.task_id
            ? {
                ...task,
                sub_tasks: task.sub_tasks.filter(
                  (_, index) => index !== action.payload.sub_task_id
                ),
              }
            : task
        ),
      };
    },
  },
});

export const { ADD_TASK, REMOVE_TASK, ADD_SUBTASK, REMOVE_SUBTASK } =
  taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTaskList = (state: RootState) => state.tasks.task_list;

export default taskSlice.reducer;
