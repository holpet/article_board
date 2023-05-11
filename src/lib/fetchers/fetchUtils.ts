import { IPostDetail, IPostSummary } from "../const/interfaces";
import { IComments, IPosts, IUsers } from "./const/interfaces";
import client from "./config/axiosConfig";
import { CALL_OPTION } from "./const/constants";

export async function fetchAll(option: string) {
  try {
    const { data } = await client.get(option, {
      signal: AbortSignal.timeout(5000),
    });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data for ${option}.`);
  }
}

export async function fetchById(option: string, id_name: string, id: number) {
  try {
    const { data } = await client.get(option, {
      signal: AbortSignal.timeout(5000),
      params: { [id_name]: id },
    });
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data for ${option}.`);
  }
}

export async function fetchAllPostSummaryData(): Promise<IPostSummary[]> {
  try {
    const [posts, users, comments]: [
      IPosts[],
      IUsers[],
      IComments[]
    ] = await Promise.all([
      fetchAll(CALL_OPTION.posts),
      fetchAll(CALL_OPTION.users),
      fetchAll(CALL_OPTION.comments),
    ]);
    const postSummaryData: IPostSummary[] = [];
    posts.map((data) => {
      const author = users.find((user) => user.id === data.userId)?.name || "";
      const comment_num = comments.filter((comment) => {
        return comment.postId === data.id;
      }).length;
      postSummaryData.push({
        id: data.id,
        title: data.title,
        author: author,
        text: data.body,
        comment_num: comment_num,
      });
    });
    return postSummaryData;
  } catch (error) {
    throw new Error("Failed to create allPostSummaryData object.");
  }
}

export async function fetchPostDetailData(id: number): Promise<IPostDetail> {
  try {
    const [post] = await fetchById(CALL_OPTION.posts, "id", id);
    const [[user], comments] = await Promise.all([
      fetchById(CALL_OPTION.users, "id", post.userId),
      fetchById(CALL_OPTION.comments, "postId", id),
    ]);
    const postDetailData: IPostDetail = {
      title: post.title,
      text: post.body,
      author: {
        name: user.name,
        username: user.username,
      },
      comments: comments,
    };
    return postDetailData;
  } catch (error) {
    throw new Error("Failed to create postDetailData object.");
  }
}
