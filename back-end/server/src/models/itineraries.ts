import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const itinerarySchema = new Schema(
  {
    _id: Number,
    itineraryId: String,
    approvalStatus: String,
    name: String,
    description: String,
    priceRating: Number,
    dinerId: String,
    diner: {
      type: Schema.Types.ObjectId,
      ref: "Diners",
    },
    activityId: String,
    activity: {
      type: Schema.Types.ObjectId,
      ref: "Activities",
    },
    adviceId: String,
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