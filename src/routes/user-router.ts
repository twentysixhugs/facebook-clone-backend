import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";
import app from "@server";

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths

export enum Paths {
  All = "/all",
  Friends = "/friends",
  FriendId = "/friends/:friendId",
  AllFriendRequests = "/friends/requests",
  FriendRequest = "api/user/friends/requests/:requestId",
  Feed = "api/user/feed",
  Profile = "api/user/profile",
}

export const queryParams = {
  [Paths.FriendRequest]: ["accept"],
  [Paths.Feed]: ["page"],
  [Paths.Profile]: ["userId"],
};

router.use(Paths.All, (req, res, next) => {
  // check auth
  // query all users
  // send req.json
});

// **** Routes **** //

export default router;
