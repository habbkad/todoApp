import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

// Define a type for the slice state
interface TaskState {
  task: String[];
}

// Define the initial state using that type
const initialState: TaskState = {
  task: [{task: 'hffyf'}],
};

export const taskSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<any>) => {
      state.task = [...state.task, action.payload];
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {addTask} = taskSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTask = (state: RootState) => state.task.task;

export default taskSlice.reducer;
