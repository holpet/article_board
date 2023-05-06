import { useEffect, useState } from "react";
import { getAllPostSummaryData } from "../../../lib/fetchers/fetchUtils";
import PostSummary from "./PostSummary";
import { IPostSummary } from "../../../lib/const/interfaces";

const PostSummaryList = () => {
  const [allPostSummaryData, setAllPostSummaryData] = useState<
    IPostSummary[] | null
  >(null);

  useEffect(() => {
    getAllPostSummaryData().then((data) => {
      setAllPostSummaryData(data);
    });
  }, []);

  return (
    <>
      {allPostSummaryData !== null &&
        allPostSummaryData.map((postSummary, i) => (
          <PostSummary
            key={i}
            id={postSummary.id}
            title={postSummary.title}
            text={postSummary.text}
            author={postSummary.author}
            comment_num={postSummary.comment_num}
          />
        ))}
    </>
  );
};

export default PostSummaryList;
