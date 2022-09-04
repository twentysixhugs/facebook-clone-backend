import { Schema } from "mongoose";
import { IProfile } from "./profileSchema.types";

export const profileSchema = new Schema<IProfile>({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: Number,
  description: String,
});

profileSchema.method("fullName", function (this: IProfile) {
  return this.first_name + " " + this.last_name;
});
