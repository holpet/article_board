import "./PostSummaryList.css";
import { fetchAllPostSummaryData } from "../../../lib/fetchers/fetchUtils";
import Wrapper from "../../wrapper/Wrapper";
import PostSummary from "./PostSummary";
import { useQuery } from "@tanstack/react-query";
import { default as spinner } from "../../../assets/spinner_loader2.svg";

const PostSummaryList = () => {
  // query all post summary data
  const postSummaryQuery = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPostSummaryData(),
  });
  if (postSummaryQuery.isLoading) return <img src={spinner} alt="spinner" />;
  if (postSummaryQuery.isError) return <h1>404 not found</h1>;

  return (
    <Wrapper>
      <section className="summary-list">
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
      </section>
    </Wrapper>
  );
};

export default PostSummaryList;
