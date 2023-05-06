import { IComments } from "../fetchers/const/interfaces";

export interface IPostSummary {
  id: number;
  title: string;
  author: string;
  text: string;
  comment_num: number;
}

export interface IPostDetail {
  title: string;
  text: string;
  author: { name: string; username: string };
  comments: IComments[];
}
