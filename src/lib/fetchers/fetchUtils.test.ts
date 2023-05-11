import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import {
  createMockFetchError,
  mockFetchedData,
} from "../../__mocks__/mockFetchedData";
import {
  fetchAll,
  fetchAllPostSummaryData,
  fetchById,
  fetchPostDetailData,
} from "./fetchUtils";
import { CALL_OPTION } from "./const/constants";
import { getServerWithFailedRes, server } from "../../__mocks__/mockServer";
import {
  createMockObjError,
  mockCreatedData,
} from "../../__mocks__/mockCreatedData";

beforeAll(() => {
  server.listen();
  console.log("Server is listening.");
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("fetchAll will call API through axios and return all available data that pertains to specific call option", () => {
  it("should return valid data based on requested option", async () => {
    Object.keys(CALL_OPTION).forEach(async (option) => {
      const data = await fetchAll(option);
      expect(data).toEqual(mockFetchedData[option]);
    });
  });
  it("should throw an error when call is unsuccessful", async () => {
    getServerWithFailedRes(server);
    Object.keys(CALL_OPTION).forEach(async (option) => {
      await expect(fetchAll(option)).rejects.toThrow(
        new Error(createMockFetchError(option))
      );
    });
  });
});

describe("fetchById will call API through axios and return available data using a specific call with id params", () => {
  it("should return valid data based on requested option", async () => {
    Object.keys(CALL_OPTION).forEach(async (option) => {
      const data = await fetchById(option, "id", 1);
      expect(data).toEqual(mockFetchedData[option]);
    });
  });
  it("should throw an error when call is unsuccessful", async () => {
    getServerWithFailedRes(server);
    Object.keys(CALL_OPTION).forEach(async (option) => {
      await expect(fetchAll(option)).rejects.toThrow(
        new Error(createMockFetchError(option))
      );
    });
  });
});

describe("fetchAllPostSummaryData will utilize fetchAll fn and create a new array of objects with received data", () => {
  it("should return a IPostSummary[]", async () => {
    const data = await fetchAllPostSummaryData();
    expect(data).toEqual(mockCreatedData.summary);
  });
  it("should throw an error when creating IPostSummary[] failed", async () => {
    getServerWithFailedRes(server);
    await expect(fetchAllPostSummaryData()).rejects.toThrow(
      new Error(createMockObjError("summary"))
    );
  });
});

describe("fetchPostDetailData will utilize fetchById fn and create a new object with received data", () => {
  it("should return a IPostDetail", async () => {
    const data = await fetchPostDetailData(1);
    console.log(data);
    expect(data).toEqual(mockCreatedData.detail);
  });
  it("should throw an error when creating IPostDetail failed", async () => {
    getServerWithFailedRes(server);
    await expect(fetchPostDetailData(1)).rejects.toThrow(
      new Error(createMockObjError("detail"))
    );
  });
});
