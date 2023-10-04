import { Schema, model } from "mongoose";

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
const comment = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    user: user,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const product = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    descount: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    comments: [comment],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Product", product);
