import { getAllPostSummaryData } from "../../../lib/fetchers/fetchUtils";
import PostSummary from "./PostSummary";
import { useQuery } from "@tanstack/react-query";

const PostSummaryList = () => {
  // query all post summary data
  const postSummaryQuery = useQuery({
    queryKey: ["post_summary"],
    queryFn: () => getAllPostSummaryData(),
  });
  if (postSummaryQuery.isLoading) return <h1>IS LOADING!</h1>;
  if (postSummaryQuery.isError) return <h1>404 not found</h1>;

  return (
    <>
      {postSummaryQuery.data.map((postSummary, i) => (
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
