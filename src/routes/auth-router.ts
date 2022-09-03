import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export enum Paths {
  Signin = "/signin",
  Signup = "/signup",
  AuthBypass = "/auth-bypass", // for showcasing the app as portfolio
}

// **** Routes **** //

export default router;
