import { rest } from "msw";
import { setupServer } from "msw/node";
import { BASE_URL, CALL_OPTION } from "../lib/fetchers/const/constants";
import { mockFetchedData } from "./mockFetchedData";

export class MockServer {
  server: typeof setupServer.prototype;

  constructor() {
    this.server = setupServer(
      rest.get(`${BASE_URL}${CALL_OPTION.posts}`, (_, res, ctx) => {
        return res(
          ctx.status(202),
          ctx.json(mockFetchedData[CALL_OPTION.posts])
        );
      }),
      rest.get(`${BASE_URL}${CALL_OPTION.users}`, (_, res, ctx) => {
        return res(
          ctx.status(202),
          ctx.json(mockFetchedData[CALL_OPTION.users])
        );
      }),
      rest.get(`${BASE_URL}${CALL_OPTION.comments}`, (_, res, ctx) => {
        return res(
          ctx.status(202),
          ctx.json(mockFetchedData[CALL_OPTION.comments])
        );
      })
    );
  }

  employServer() {
    return this.server;
  }

  employServerFail() {
    this.server.use(
      rest.get(`${BASE_URL}${CALL_OPTION.posts}`, (_, res, ctx) => {
        return res(ctx.status(404));
      }),
      rest.get(`${BASE_URL}${CALL_OPTION.users}`, (_, res, ctx) => {
        return res(ctx.status(404));
      }),
      rest.get(`${BASE_URL}${CALL_OPTION.comments}`, (_, res, ctx) => {
        return res(ctx.status(404));
      })
    );
    return this.server;
  }
}
