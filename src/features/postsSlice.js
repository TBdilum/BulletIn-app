
import { createSlice, nanoid } from '@reduxjs/toolkit'

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
    reducers:{
        postAdded:{
            reducer(state,action){
            state.push(action.payload)
        },
        prepare(title,content){
            return{
                payload:{
                    id: nanoid(),
                    title,
                    content
                }
            }
        }
    }
}
})

export default postsSlice.reducer;

export const { postAdded} = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;
