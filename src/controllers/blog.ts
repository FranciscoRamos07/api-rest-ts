import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

const updateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_UPDATING_BLOG");
  }
};
const postItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHttp(res, "ERROR_POSTING_BLOG");
  }
};
const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHttp(res, "ERROR_DELETING_BLOG");
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem };
