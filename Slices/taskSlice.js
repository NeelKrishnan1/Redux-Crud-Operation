import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskList: [],
    selectedTask: {},
};

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTasktoList: (state, action) => {
            const id = Math.random() * 100;
            let task = { ...action.payload, id }
            state.taskList.push(task)
        },
        removeTaskfromList: (state, action) => {
            state.taskList = state.taskList.filter((task) => task.id !== action.payload.id)
        },
        updateTaskfromList: (state, action) => {
            state.taskList = state.taskList.map((task) => task.id === action.payload.id ? action.payload : task)
        },
        setSelectedTask: (state, action) => {
            state.selectedTask = action.payload
        }
    },
});

export const { addTasktoList, removeTaskfromList, updateTaskfromList, setSelectedTask } = taskSlice.actions;
export default taskSlice.reducer