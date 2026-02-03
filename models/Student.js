import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sal: {
    type: Number,
  },
});

export default mongoose.model("Student", studentSchema);
