import { useState } from "react";
import { changeVotesByInc, changeVotesByDec } from "../utils/api";

const Voting = ({ votes, article_id }) => {
  const [voteCounter, setVoteCounter] = useState(votes);

  const triggerVotes = (increment) => {
    if (increment) {
      changeVotesByInc(article_id).then(
        (voteData) => {
          setVoteCounter(voteData.votes);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      changeVotesByDec(article_id).then(
        (voteData) => {
          setVoteCounter(voteData.votes);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  return (
    <>
      <p>Votes: {voteCounter}</p>
      <button onClick={() => triggerVotes(true)}>Up Vote</button>
      <button onClick={() => triggerVotes(false)}>Down vote</button>
    </>
  );
};

export default Voting;
