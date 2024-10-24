import mongoose from "mongoose"

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String, required: true },
})

const Image = mongoose.model("images", ImageSchema)

export default Image
