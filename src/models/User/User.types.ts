import { Model } from "mongoose";
import {
  IProfile,
  IProfileMethods,
} from "./schemas/Profile/profileSchema.types";

export interface IUser {
  email: string;
  hashedPassword: string;
  profile: IProfile & IProfileMethods;
  created_at: Date;
}

export interface IUserMethods {
  comparePassword(password: string): Promise<boolean>;
}

export type UserModel = Model<IUser, {}, IUserMethods>;
