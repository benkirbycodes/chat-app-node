import mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Message = new Schema({
  text: { type: String },
  convoId: { type: ObjectId, ref: "Convo", required: true },
  authorId: { type: ObjectId, ref: "User", required: true }
});

const Convo = new Schema({
  title: { type: String, required: true },
  members: [{ type: ObjectId, ref: "User", required: true }],
  messages: [Message],
  adminId: { type: ObjectId, ref: "User", required: true }
});

export default Convo;
