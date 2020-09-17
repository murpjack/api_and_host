import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const itinerarySchema = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    diner: {
      type: Schema.Types.ObjectId,
      ref: "Diner",
    },
    activity: {
      type: Schema.Types.ObjectId,
      ref: "Activity",
    },
    advice: {
      type: Schema.Types.ObjectId,
      ref: "Advice",
    },
  },
  {
    timestamps: true,
  }
);

export const itineraryModel = mongoose.model("Itinerary", itinerarySchema);

export default itineraryModel;