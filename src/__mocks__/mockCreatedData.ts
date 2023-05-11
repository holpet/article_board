import { IPostDetail, IPostSummary } from "../lib/const/interfaces";

const mockPostSummaryArray: IPostSummary[] = [
  {
    id: 1,
    title: "Captain America",
    author: "Peter Griffin",
    text: "I can do this all day.",
    comment_num: 1,
  },
];

const mockPostDetail: IPostDetail = {
  title: "Captain America",
  text: "I can do this all day.",
  author: { name: "Peter Griffin", username: "griffin" },
  comments: [
    {
      postId: 1,
      id: 1,
      name: "Hello darkness my old friend...",
      email: "darkness@friend.biz",
      body: "I've come to talk with you again...",
    },
  ],
};

export function createMockObjError(type: string) {
  switch (type) {
    case "summary":
      return `Failed to create allPostSummaryData object.`;
    case "detail":
      return `Failed to create postDetailData object.`;
    default:
      break;
  }
}

export const mockCreatedData = {
  summary: mockPostSummaryArray,
  detail: mockPostDetail,
};
