const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdviceSchema = new Schema(
  {
    _id: Number,
    approvalStatus: String,
    description: String,
  },
  { timestamps: true }
);

module.exports.activeSchema = AdviceSchema;
module.exports = mongoose.model("advice", AdviceSchema);
