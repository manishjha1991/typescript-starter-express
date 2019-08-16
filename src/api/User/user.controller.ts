import { Request, Response, NextFunction } from "express";
import * as _ from "lodash";
import Model from "./user.model";
import { success, failure } from "../../utils/buildResponse";
export default class UserController {
  /**
   * Get all
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  public static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      //
      // Get data
      let result = await Model.find().exec();

      //
      // Response
      res.send(success(result));
    } catch (err) {
      //
      // Error response
      res.send(failure(err));
    }
  }
}
