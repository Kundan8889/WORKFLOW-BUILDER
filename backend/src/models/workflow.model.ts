import mongoose from "mongoose";

const WorkflowSchema = new mongoose.Schema(
  {
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Workflow", WorkflowSchema);
