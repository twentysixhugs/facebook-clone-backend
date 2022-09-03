import StatusCodes from "http-status-codes";
import { Request, Response, Router } from "express";

import userService from "@services/user-service";
import { ParamMissingError } from "@shared/errors";

// **** Variables **** //

// Misc
const router = Router();
const { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: "/all",
  add: "/add",
  update: "/update",
  delete: "/delete/:id",
} as const;

// **** Routes **** //

export default router;
