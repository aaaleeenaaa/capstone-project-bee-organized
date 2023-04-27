import mongoose from "mongoose";

const { Schema } = mongoose;

const locationSchema = new Schema({
  location: { type: String, required: true },
});

const Location =
  mongoose.models.Location || mongoose.model("Location", locationSchema);

export default Location;
