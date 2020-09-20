import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const userSchema = new Schema({
	_id: String,
	age: Number,
	name: String,
	favouriteColour: String
  },
  {
    timestamps: true,
  });

export const userModel = mongoose.model("User", userSchema);

export default userModel;