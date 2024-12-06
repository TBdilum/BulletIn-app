import React from 'react'
import PostList from '../features/posts/PostList'
import AddPostForm from '../features/posts/AddPostForm'

function App() {
  return (
    <div>
        <AddPostForm/>
        <PostList/>
    </div>
  )
}

export default App