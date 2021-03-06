import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
    comments: { user: string, comment: string }[]
    eventName: string
}
interface CommentArray {
    name: string
    comment: string
}

export default function Comments({comments, eventName}: Props): ReactElement {
const [name, setName] = useState<string>("")
const [comment, setComment] = useState<string>("")
const [commentState, setCommentState] = useState<CommentArray[]>([])

let localComments: any = localStorage.getItem(`${eventName}`)

useEffect(() => {
    if(localComments){
    let oneArray: CommentArray[] = JSON.parse(localComments)
   setCommentState(oneArray)
} else {
 localStorage.setItem(`${eventName}`, "[]")
}
  }, [])

    function saveComment() {
        localComments = localStorage.getItem(`${eventName}`)
        let newArray: CommentArray[] = JSON.parse(localComments)
        newArray.unshift({name: name, comment: comment})
        setCommentState(newArray)
        localStorage.setItem(`${eventName}`,JSON.stringify(newArray) )
    }

    return (
        <div data-testid="commentSection" className="commentContainer" >
            <input type="text" placeholder='Name' data-testid="nameInput" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Comment' data-testid="commentInput" onChange={(e) => setComment(e.target.value)} />
            <button id="sendBtn" onClick={saveComment} >Send</button>
            {commentState && commentState.map((data, index) => (
                <div key={index} className="comments">
                <p><b>{data.name}:</b> &nbsp;</p>
                <p>{data.comment}</p>
                </div>
            ))}
            {comments.map((data, index) => (
                <div key={index} className="comments">
                <p><b>{data.user}:</b> &nbsp;</p>
                <p>{data.comment}</p>
                </div>
            ))}
        </div>
    )
}
