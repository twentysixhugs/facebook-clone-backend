import { Schema, InferSchemaType, model } from "mongoose";

const schema = new Schema({
  text: { type: String, required: true },
  created_at: { type: Date, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

schema.pre("save", function (next) {
  this.created_at = new Date();
  return next();
});

export type IPost = InferSchemaType<typeof schema>;

export const Post = model("Post", schema);
