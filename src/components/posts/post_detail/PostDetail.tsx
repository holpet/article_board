import { useCallback } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getPostDetailData } from "../../../lib/fetchers/fetchUtils";
import { useQuery } from "@tanstack/react-query";

const PostDetail = () => {
  const { postId } = useParams();

  // (if requested) scroll to comments section
  const location = useLocation();
  const commentsRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && location.hash) {
        node.scrollIntoView({ behavior: "smooth" });
      } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [location]
  );

  // query post detail data
  const postDetailQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPostDetailData(Number(postId)),
  });
  if (postDetailQuery.isLoading) return <h1>IS LOADING!</h1>;
  if (postDetailQuery.isError) return <h1>404 not found</h1>;

  return (
    <>
      <Link to="/">Go back</Link>
      <>
        <h1>{postDetailQuery.data.title}</h1>
        <h3>
          {postDetailQuery.data.author.name} (
          {postDetailQuery.data.author.username})
        </h3>
        <p>{postDetailQuery.data.text}</p>
        <br />
        <div id="comments" ref={commentsRef}>
          <h3>Comments:</h3>
          {postDetailQuery.data.comments.map((comment, i) => (
            <div key={i}>
              <h5>{comment.name}</h5>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default PostDetail;
