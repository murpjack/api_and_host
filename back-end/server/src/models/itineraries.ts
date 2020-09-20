import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const itinerarySchema = new Schema(
  {
    _id: String,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    dinerId: String,
    diner: {
      type: Schema.Types.ObjectId,
      ref: "diners",
    },
    activityId: String,
    activity: {
      type: Schema.Types.ObjectId,
      ref: "activities",
    },
    adviceId: String,
    advice: {
      type: Schema.Types.ObjectId,
      ref: "advice",
    },
  },
  {
    timestamps: true,
  }
);

export const itineraryModel = mongoose.model("Itinerary", itinerarySchema);

export default itineraryModel;