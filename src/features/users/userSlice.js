import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0' , name: 'Dilum Paranavithana'},
    {id: '1' , name: 'James Bond'},
    {id: '2' , name: 'Neil Armstrong'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;