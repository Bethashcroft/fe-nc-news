import { useState, useEffect } from "react";
import { getCommentsById } from "../utils/api";
import AllComments from "./AllComments";
import CommentPosted from "./CommentPosted";

const CommentsOnArticle = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      <CommentPosted
        article_id={article_id}
        setComments={setComments}
        comments={comments}
      />
      <AllComments comments={comments} />
    </>
  );
};

export default CommentsOnArticle;
