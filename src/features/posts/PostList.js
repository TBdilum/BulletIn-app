import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import PostAuthor from './postAuthor';

function PostList() {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className='postCredit'><PostAuthor userId={post.userId}/></p>
        </article>
    ))
  return (
    <div>
        <h2>Posts</h2>
        {renderedPosts}
    </div>
  )
}

export default PostList