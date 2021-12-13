import React, { ReactElement } from 'react'

interface Props {
    comments: { user: string, comment: string }[]
}

export default function Comments({comments}: Props): ReactElement {
    return (
        <div>

            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Comment' />
            <button>Send</button>
            {comments.map((data) => (
                <div className="comments">
                <p>From {data.user}: &nbsp;</p>
                <p>{data.comment}</p>
                
                </div>
            ))}
        </div>
    )
}
