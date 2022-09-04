import { comparePassword } from "@shared/functions";
import { Schema, model } from "mongoose";
import { profileSchema } from "./schemas/Profile/profileSchema";
import { IUser, IUserMethods, UserModel } from "./User.types";

const schema = new Schema<IUser, UserModel, IUserMethods>({
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  profile: { type: profileSchema, required: true },
  created_at: { type: Date, required: true },
});

schema.pre("save", function (next) {
  this.created_at = new Date();
  return next();
});

schema.method(
  "comparePassword",
  async function (this: IUser, password: string): Promise<boolean> {
    return await comparePassword(password, this.hashedPassword);
  }
);

export const User = model<IUser, UserModel>("User", schema);
