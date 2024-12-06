import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

import React from 'react'

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
    coffee: '☕'
}

function ReactionButtons({post}) {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => {
        return(
            <button
            type="button"
            key={name}
            className="reactionButton"
            onClick={() => dispatch(reactionAdded({postId: post.id,reaction: name}))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })
    return(
        <div>{reactionButtons}</div>
    )
}

export default ReactionButtons