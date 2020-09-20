import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const adviceSchema = new Schema(
  {
    _id: Number,
    adviceId: String,
    approvalStatus: String,
    description: String,
  },
  { timestamps: true }
);

export const adviceModel = mongoose.model("advice", adviceSchema);
export default adviceModel;
