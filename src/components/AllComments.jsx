const DisplayAllComments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => {
        const { author, body, created_at, votes } = comment;
        return (
          <div key={created_at}>
            <h4>{author}</h4>
            <p>{body}</p>
            <p>{created_at}</p>
            <p>{votes}</p>
          </div>
        );
      })}
    </>
  );
};

export default DisplayAllComments;
