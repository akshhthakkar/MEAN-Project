import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
  },
  year: {
    type: Number,
  },
  email: {
    type: String,
  },
  cgpa: {
    type: Number,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Student", studentSchema);
