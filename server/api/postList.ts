import type { IncomingMessage, ServerResponse } from "http";
import client from "./client";
import { Post } from "./types";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const queries = {
    fields: "id,title,publishedAt,tag",
  };

  const data = client.getList<Post>({
    endpoint: "blogs",
    queries: queries,
  });

  return data;
};
