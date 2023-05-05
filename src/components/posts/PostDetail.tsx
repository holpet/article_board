import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();

  return <div>POST DETAIL {postId}</div>;
};

export default PostDetail;
