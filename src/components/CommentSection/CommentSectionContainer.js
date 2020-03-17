// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("this is the comments", props.comments);
 

  return (
    <div>
      {props.comments.map((item,index)=>{
        console.log("this is new ITEM",item);
        return <Comment key = {index} comment = {item} />
      })}
      <CommentInput comments = {props.comments}/>
    </div>
  );
};

export default CommentSection;
