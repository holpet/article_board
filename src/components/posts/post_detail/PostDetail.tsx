import "../Posts.css";
import "./PostDetail.css";
import { useCallback } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchPostDetailData } from "../../../lib/fetchers/fetchUtils";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../wrapper/Wrapper";
import Icon from "@mdi/react";
import { mdiClover } from "@mdi/js";

const PostDetail = () => {
  const { postId } = useParams();

  // (if requested) scroll to comments section
  const loc = useLocation();
  const commentsRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && loc.hash) {
        node.scrollIntoView({ behavior: "smooth" });
      } else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
    [loc]
  );

  // query post detail data
  const postDetailQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostDetailData(Number(postId)),
  });
  if (postDetailQuery.isLoading) return <h1>IS LOADING!</h1>;
  if (postDetailQuery.isError) return <h1>404 not found</h1>;

  return (
    <Wrapper>
      <button className="button-detail" onClick={() => (location.href = "/")}>
        Go back
      </button>
      <div className="detail content">
        <div className="content-heart">♥</div>
        <div className="title">
          <h1>{postDetailQuery.data.title}</h1>
        </div>
        <h3>
          <Icon path={mdiClover} size={1} className="clover" />
          &nbsp;{postDetailQuery.data.author.name} (
          {postDetailQuery.data.author.username})
        </h3>
        <p>{postDetailQuery.data.text}</p>
      </div>
      <br />
      <div className="detail content">
        <div id="comments" ref={commentsRef}>
          <h3>Comments:</h3>
          {postDetailQuery.data.comments.map((comment, i) => (
            <div key={i} className="comment">
              <h5>{comment.name}</h5>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PostDetail;
