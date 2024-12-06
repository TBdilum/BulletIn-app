import { postAdded } from "./postsSlice";
import { useState } from "react";
import {useDispatch} from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import React from 'react'

function AddPostForm() {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);

    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if(title && content){
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
            setTitle('');
            setContent('');
        }
    }


  return (
    <section>
        <h2>Add a New Post</h2>
        <form>
        <label htmlFor="postTitle">Post Title:</label>
            <input
                type='text'
                id='postTitle'
                name='postTitle'
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
                type='text'
                id='postContent'
                name='postContent'
                value={content}
                onChange={onContentChanged}
            />
            <button onClick={onSavePostClicked} type="button">Save Post</button>
        </form>
    </section>
  )
}

export default AddPostForm