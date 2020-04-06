import mongoose from "mongoose";
import Convo from "../models/Convo";
import ApiError from "../utils/ApiError";

const _repo = mongoose.model("Convo", Convo);

class ConvoService {
  //All methods tested in Postman, work for now

  async getAll(userId) {
    return await _repo.find({ adminId: userId });
  }
  async getById(id, userId) {
    let data = await _repo.findOne({ _id: id, adminId: userId });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this convo", 400);
    }
    return data;
  }
  async create(newConvo) {
    let data = await _repo.create(newConvo);
    return data;
  }
  async addMessage(convoId, message) {
    let data = await _repo.findOneAndUpdate(
      { _id: convoId, members: { $all: [message.authorId] } },
      { $push: { messages: message } },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you are not a part of this convo", 400);
    }
    return data;
  }
  async edit(id, userId, update) {
    let data = await _repo.findOneAndUpdate(
      { _id: id, adminId: userId },
      update,
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this convo", 400);
    }
    return data;
  }
  async delete(id, userId) {
    let data = await _repo.findOneAndRemove({
      _id: id,
      adminId: userId
    });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this convo", 400);
    }
  }
  async removeMessage(payload) {
    let data = await _repo.findOneAndUpdate(
      { _id: payload.convoId, members: { $all: [payload.userId] } },
      { $pull: { messages: { _id: payload.messageId } } },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Invalid ID or you are no a part of this convo", 400);
    }
    return data;
  }
}

const _convoService = new ConvoService();
export default _convoService;
