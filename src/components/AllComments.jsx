const DisplayAllComments = ({ comment }) => {
  return (
    <li>
      <h2>Username: {comment.author}</h2>
      <p>Comment: {comment.body}</p>
      <p>Comment created at: {comment.created_at}</p>
      <h2>Votes: {comment.votes}</h2>
    </li>
  );
};

export default DisplayAllComments;
