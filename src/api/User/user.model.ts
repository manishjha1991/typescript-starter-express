import { Schema, model } from "mongoose";

let schema: Schema = new Schema({
  firstName: String,
  latName: String,
});

export default model("User", schema);
