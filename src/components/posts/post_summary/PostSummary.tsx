import { Link } from "react-router-dom";
import { IPostSummary } from "../../../lib/const/interfaces";

const PostSummary = ({
  id,
  title,
  author,
  text,
  comment_num,
}: IPostSummary) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{text}</p>
      <Link to={`/posts/${id}`}>READ MORE</Link>
      <p>comments: {comment_num}</p>
    </div>
  );
};

export default PostSummary;
