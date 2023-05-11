import { CALL_OPTION } from "../lib/fetchers/const/constants";

const mockPosts = [
  {
    userId: 1,
    id: 1,
    title: "Captain America",
    body: "I can do this all day.",
  },
];

const mockUsers = [
  {
    id: 1,
    name: "Peter Griffin",
    username: "griffin",
    email: "griffin@april.biz",
    address: {
      street: "Griffin street",
      suite: "",
      city: "Petersburg",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "pgriffin.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Wallowing around.",
      bs: "no idea",
    },
  },
];

const mockComments = [
  {
    postId: 1,
    id: 1,
    name: "Hello darkness my old friend...",
    email: "darkness@friend.biz",
    body: "I've come to talk with you again...",
  },
];

export function createMockFetchError(option: string): string {
  return `Failed to fetch data for ${option}.`;
}

export const mockFetchedData = {
  [CALL_OPTION.posts]: mockPosts,
  [CALL_OPTION.users]: mockUsers,
  [CALL_OPTION.comments]: mockComments,
};
