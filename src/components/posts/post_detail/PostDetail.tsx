import "../Posts.css";
import "./PostDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostDetailData } from "../../../lib/fetchers/fetchUtils";
import { useQuery } from "@tanstack/react-query";
import Wrapper from "../../wrapper/Wrapper";
import Icon from "@mdi/react";
import { mdiArrowUUpLeftBold, mdiArrowLeftThin } from "@mdi/js";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { default as spinner } from "../../../assets/spinner_loader2.svg";
import Error from "../../error/Error";
import Article from "./components/Article";
import Comments from "./components/Comments";

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  // query post detail data
  const postDetailQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPostDetailData(Number(postId)),
  });
  if (postDetailQuery.isLoading) return <img src={spinner} alt="spinner" />;
  if (postDetailQuery.isError) return <Error type="fetch" />;

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
          <Article
            title={postDetailQuery.data.title}
            name={postDetailQuery.data.author.name}
            username={postDetailQuery.data.author.username}
            text={postDetailQuery.data.text}
          />
          <br />
          {/* COMMENT SECTION */}
          <Comments comments={postDetailQuery.data.comments} />

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
