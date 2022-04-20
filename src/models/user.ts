import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  residence: {
    type: String,
    required: true,
  },
  technology_interset: {
    type: String,
  },
  project: {
    type: String,
  },
  introduce: {
    type: String,
  },
  git: {
    type: String,
  },
  git_num: {
    type: Number,
  },
  notion: {
    type: String,
  },
  notion_num: {
    type: Number,
  },
});

export default mongoose.model<mongoose.Document>("User", UserSchema);
