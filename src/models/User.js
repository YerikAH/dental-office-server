import { modal, Schema } from "mongoose";

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

const user = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone_number: {
      type: String,
      required: true,
    },
    password: String,
    bag: [product],
    products_like: [product],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default modal("user", user);
