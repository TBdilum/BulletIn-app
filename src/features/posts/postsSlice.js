
import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [{
    id: 1, 
    title: 'first post',
    content: 'this is the first post',
    date:sub(new Date(), {minutes: 10}).toISOString()
},
{
    id: 2,
    title: 'second post',
    content: 'this is the second post',
    date:sub(new Date(), {minutes: 5}).toISOString()
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
        prepare(title,content,userId){
            return{
                payload:{
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                }
            }
        }
    }
}
})

export default postsSlice.reducer;

export const { postAdded} = postsSlice.actions;

export const selectAllPosts = (state) => state.posts;
