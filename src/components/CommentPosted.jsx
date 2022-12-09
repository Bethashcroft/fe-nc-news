import { useState } from "react";
import { postAComment } from "../utils/api";

const CommentPosted = ({ article_id, setComments, comments }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newBody, setNewBody] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPosted(true);

    const commentToPost = {
      username: newUsername,
      body: newBody,
    };

    postAComment(article_id, commentToPost).then(() => {
      const newComment = {
        author: newUsername,
        body: newBody,
        votes: 0,
        created_at: "Now",
      };
      setIsPosted(false);
      alert("Your comment has been posted");
      setComments((comments) => {
        return [newComment, ...comments];
      });
    });
  };

  return (
    <form className="commentForm" onSubmit={handleSubmit}>
      <h3>Add a comment here</h3>
      <label htmlFor="newCommentInput">Name:</label>
      <input
        required
        id="newCommentInput"
        value={newUsername}
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      ></input>
      <label htmlFor="newCommentInput">Comment:</label>
      <input
        required
        id="newCommentInput"
        value={newBody}
        onChange={(e) => {
          setNewBody(e.target.value);
        }}
      ></input>
      <button disabled={isPosted}>Submit</button>
    </form>
  );
};
export default CommentPosted;
