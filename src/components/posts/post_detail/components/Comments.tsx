import "./Comments.css";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { IComments } from "../../../../lib/fetchers/const/interfaces";
import Icon from "@mdi/react";
import { mdiClover } from "@mdi/js";

interface ICommentsProps {
  comments: IComments[];
}

const Comments = ({ comments }: ICommentsProps) => {
  // (if requested) scroll to comments section
  const loc = useLocation();
  const commentsRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node !== null && loc.hash) {
        node.scrollIntoView({ behavior: "smooth" });
      }
    },
    [loc]
  );

  return (
    <section className="detail content">
      <div id="comments" ref={commentsRef}>
        <div className="comments-bg">
          <h3>Comments</h3>
        </div>
        {comments.map((comment, i) => (
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
  );
};

export default Comments;
