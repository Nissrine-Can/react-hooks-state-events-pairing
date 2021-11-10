import React from "react";

function VoteBtn({ 
          votes, 
          emoji, 
          onVoteClick     
    }) {

    
    return(
       <button onClick={onVoteClick}>{emoji}{votes}</button>
    )
}

export default VoteBtn;