
import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    id: 1, 
    title: 'first post',
    content: 'this is the first post'
},
{
    id: 2,
    title: 'second post',
    content: 'this is the second post'
}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{}
})

export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;
