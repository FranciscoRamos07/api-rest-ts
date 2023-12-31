import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";


interface RequestExt extends Request{
  user?: string | JwtPayload
}

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO LO VE SOLO PERSONAS CON SESION / JWT",
      user: req.user
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};


export {getItems };
