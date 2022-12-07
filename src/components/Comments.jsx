import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import DisplayAllComments from "./AllComments";

const CommentsOnArticle = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(article_id);

  useEffect(() => {
    getCommentsById(article_id).then((commentsData) => {
      setComments(commentsData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {comments.map((comment) => {
        return (
          <DisplayAllComments comment={comment} key={comment.created_at} />
        );
      })}
    </ul>
  );
};

export default CommentsOnArticle;
