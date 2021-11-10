import React  from "react";

function ToggleComments( {onToggleComments, isHidden }) {
   
    return(
       <button onClick={onToggleComments}>{isHidden ? "Show Comments" : "Hide Comments"}</button>
    )
}

export default ToggleComments;