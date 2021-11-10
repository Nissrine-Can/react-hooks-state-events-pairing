import React from "react";


function Comment({ user, comment, isHidden }) {
    return(
        <div>
                {isHidden? 
                null :
                <div>
                    <h4>{user}</h4>
                    <p>{comment}</p>
                </div>}
        </div>
    )
}

export default Comment;