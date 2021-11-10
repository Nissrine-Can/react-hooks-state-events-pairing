import React, {useState } from "react";
import video from "../data/video.js";
import Header from "./Header";
import VoteBtn from "./VoteBtn.js";
import Comment from "./Comment";
import CountComments  from "./CountComments.js";
import ToggleComments from "./ToggleComments.js";

function App() {
  //console.log("Here's your data:", video);

  const [upVote, setUpVote] = useState(video.upvotes);
  const [downVote, setDownVote] = useState(video.downvotes);
  const [isHidden, setIsHidden] = useState(false);
  
  function handleUpVoteClick() {
    setUpVote(upVote => upVote + 1)
 }

  function handleDownVoteClick() {
    setDownVote(downVote => downVote - 1)
  }
 
  const comments = video.comments.map((commentObj) => {
    return <Comment 
                   key={commentObj.id} 
                   user={commentObj.user} 
                   comment={commentObj.comment}
                   isHidden={isHidden}
                />
  })

  function handleToggleComments() {
      setIsHidden((isHidden) => !isHidden)
  }
  
  

  return (
    <div className="App">
      <Header 
          link={video.embedUrl} 
          title={video.title}
          views={video.views}
          date={video.createdAt}
      />
      <VoteBtn 
          emoji="👍" 
          votes={upVote} 
          onVoteClick={handleUpVoteClick}
      />
      <VoteBtn 
          emoji= "👎" 
          votes={downVote} 
          onVoteClick={handleDownVoteClick}
      />
      <CountComments count={comments.length} />
      <ToggleComments 
        comments={comments} 
        onToggleComments={handleToggleComments} 
        isHidden={isHidden}
      />
     {comments} 
    </div>
  );
}

export default App;
