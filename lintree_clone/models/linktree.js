import mongoose from "mongoose";

const LinktreeSchema = new mongoose.Schema({
  email: String,
  data: String,
  createdAt: { type: Date, default: Date.now },
});

// Prevent overwriting the model
const Linktree = mongoose.models.Linktree || mongoose.model("Linktree", LinktreeSchema);

export default Linktree;
