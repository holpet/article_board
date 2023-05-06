import { IPostDetail, IPostSummary } from "../const/interfaces";
import client from "./config/axiosConfig";
import { CALL_OPTION } from "./const/constants";
import { IComments, IPosts, IUsers } from "./const/interfaces";

async function fetchAll(option: string) {
  try {
    let { data } = await client.get(option, {
      signal: AbortSignal.timeout(5000),
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function fetchById(option: string, id_name: string, id: number) {
  try {
    let { data } = await client.get(option, {
      signal: AbortSignal.timeout(5000),
      params: { [id_name]: id },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getAllPostSummaryData(): Promise<IPostSummary[]> {
  const [posts, users, comments]: [
    IPosts[],
    IUsers[],
    IComments[]
  ] = await Promise.all([
    fetchAll(CALL_OPTION.posts),
    fetchAll(CALL_OPTION.users),
    fetchAll(CALL_OPTION.comments),
  ]);
  const postSummaryData: IPostSummary[] = Array(posts.length);
  posts.map((data) => {
    postSummaryData.push({
      id: data.id,
      title: data.title,
      author: users.filter((user) => {
        return user.id === data.userId;
      })[0].name,
      text: data.body,
      comment_num: comments.filter((comment) => {
        return comment.postId === data.id;
      }).length,
    });
  });
  return postSummaryData;
}

export async function getPostDetailData(id: number): Promise<IPostDetail> {
  const [post] = await fetchById(CALL_OPTION.posts, "id", id);
  const [[user], comments] = await Promise.all([
    fetchById(CALL_OPTION.users, "id", post.userId),
    fetchById(CALL_OPTION.comments, "postId", id),
  ]);
  const postDetailData = {
    title: post.title,
    text: post.text,
    author: {
      name: user.name,
      username: user.username,
    },
    comments: comments,
  };
  return postDetailData;
}
