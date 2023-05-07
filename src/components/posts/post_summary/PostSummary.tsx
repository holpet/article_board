import "./PostSummary.css";
import "../Posts.css";
import { IPostSummary } from "../../../lib/const/interfaces";
import Icon from "@mdi/react";
import { mdiClover } from "@mdi/js";
import { useEffect } from "react";
import { capitalizeText } from "../../../lib/helpers/formatterUtils";

const PostSummary = ({
  id,
  title,
  author,
  text,
  comment_num,
}: IPostSummary) => {
  useEffect(() => {
    capitalizeText();
  }, []);

  return (
    <div className="summary content">
      <div className="title">
        <h1 className="line-clamp clamp-1">{title}</h1>
      </div>
      <h3>
        <Icon path={mdiClover} size={1} className="clover" />
        &nbsp;{author}
      </h3>
      <p className="line-clamp clamp-2">{text}</p>
      <div className="links">
        <button
          className="button-summary"
          onClick={() => (location.href = `/posts/${id}`)}
        >
          READ MORE
        </button>
        <p className="comments">
          comments: <a href={`/posts/${id}#comments`}>{comment_num}</a>
        </p>
      </div>
    </div>
  );
};

export default PostSummary;
