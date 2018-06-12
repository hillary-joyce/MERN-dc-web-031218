const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VAParksSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: { type: String },
  img: { type: String },
  url: { type: String },
  description: { type: String },
  address: { type: String },
  visitor_center: { type: Boolean },
  hiking: { type: Boolean },
  camping: { type: Boolean },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const VAPark = mongoose.model("VAPark", VAParksSchema);

module.exports = VAPark;
