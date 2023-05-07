import "../Posts.css";
import "./PostDetail.css";
import { useCallback } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { fetchPostDetailData } from "../../../lib/fetchers/fetchUtils";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../wrapper/Wrapper";
import Icon from "@mdi/react";
import { mdiClover, mdiArrowUUpLeftBold, mdiArrowLeftThin } from "@mdi/js";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

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
  if (postDetailQuery.isError)
    return <h1>Sorry! An error occured. Please, try again later.</h1>;

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Wrapper>
          {/* BUTTON & TAG SECTION */}
          <div className="button-wrapper">
            <button className="button-detail" onClick={() => navigate(-1)}>
              <Icon path={mdiArrowLeftThin} size={1.5} />
            </button>
            <div>
              <button className="button-detail button-tag">Tags 1</button>
              <button className="button-detail button-tag">Tags 2</button>
            </div>
          </div>
          {/* ARTICLE SECTION */}
          <section className="detail content">
            <div className="heart">♥</div>
            <article>
              <div className="title">
                <h1>{postDetailQuery.data.title}</h1>
              </div>
              <h3>
                <Icon path={mdiClover} size={1} className="clover" />
                &nbsp;{postDetailQuery.data.author.name}&nbsp;@
                <span>{postDetailQuery.data.author.username}</span>
              </h3>
              <p>{postDetailQuery.data.text}</p>
            </article>
          </section>
          <br />
          {/* COMMENT SECTION */}
          <section className="detail content">
            <div id="comments" ref={commentsRef}>
              <div className="comments-bg">
                <h3>Comments</h3>
              </div>
              {postDetailQuery.data.comments.map((comment, i) => (
                <div key={i} className="comment">
                  <div className="comment-icon">
                    <Icon path={mdiClover} size={0.6} className="clover" />
                  </div>
                  <div className="comment-body">
                    <h5>{comment.name}</h5>
                    <h6>{comment.email}</h6>
                    <p>{comment.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* scroll back up */}
          <div className="up-arrow">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <Icon path={mdiArrowUUpLeftBold} size={1.5} />
            </button>
          </div>
        </Wrapper>
      </Container>
    </>
  );
};

export default PostDetail;
