import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostDetailData } from "../../../lib/fetchers/fetchUtils";
import { IPostDetail } from "../../../lib/const/interfaces";

const PostDetail = () => {
  const { postId } = useParams();
  const [postDetailData, setPostDetailData] = useState<IPostDetail | null>(
    null
  );

  useEffect(() => {
    getPostDetailData(Number(postId)).then((data) => {
      setPostDetailData(data);
    });
  }, []);

  return (
    <>
      <Link to="/">Go back</Link>
      {postDetailData !== null && (
        <>
          <h1>{postDetailData.title}</h1>
          <h3>
            {postDetailData.author.name} ({postDetailData.author.username})
          </h3>
          <p>{postDetailData.text}</p>
          <br />
          <h3>Comments:</h3>
          {postDetailData.comments.map((comment, i) => (
            <div key={i}>
              <h5>{comment.name}</h5>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default PostDetail;
