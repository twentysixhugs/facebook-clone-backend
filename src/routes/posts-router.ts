import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export enum Paths {
  UserPosts = "posts",
  AllPosts = "posts/all",
  Post = "posts/:postId",
  Likes = "posts/:postId/likes",
  Like = "posts/:postId/likes/:userId",
  Comments = "posts/:postId/comments",
  Comment = "posts/:postId/comments/:commentId",
}

export const queryParams = {
  [Paths.UserPosts]: ["userId", "page"],
};

// **** Routes **** //

export default router;
