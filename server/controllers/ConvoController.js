import express from "express";
import { Authorize } from "../middleware/authorize";
import _convoService from "../services/ConvoService";
import _userService from "../services/UserService";

export default class ConvoController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getAll)
      .get("/usernames", this.getUsernames)
      .get("/:id", this.getById)
      .post("", this.create)
      .post("/:id/messages", this.addMessage)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .delete("/:convoId/messages/:id", this.removeMessage)
      .use(this.defaultRoute);
  }
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  //All methods tested in Postman, work for now
  async getAll(req, res, next) {
    try {
      let data = await _convoService.getAll(req.session.uid);
      return res.send(data);
    } catch (err) {
      next(err);
    }
  }

  async getUsernames(req, res, next) {
    try {
      let data = await _userService.getUsernames();
      res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await _convoService.getById(req.params.id, req.session.uid);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let otherMemberId = await _userService.getIdByUsername(req.body.member);
      req.body.adminId = req.session.uid;
      req.body.members = [req.session.uid, otherMemberId];
      let data = await _convoService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async addMessage(req, res, next) {
    try {
      let username = await _userService.getUsernameById(req.session.uid);
      req.body.authorId = req.session.uid;
      req.body.username = username;
      let data = await _convoService.addMessage(req.params.id, req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await _convoService.edit(
        req.params.id,
        req.session.uid,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async;
  async delete(req, res, next) {
    try {
      await _convoService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
  async removeMessage(req, res, next) {
    try {
      let data = await _convoService.removeMessage({
        convoId: req.params.convoId,
        userId: req.session.uid,
        messageId: req.params.id
      });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
