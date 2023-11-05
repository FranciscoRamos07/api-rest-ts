import { Router, Response,Request } from "express";
import { getItems,getItem, updateItem, deleteItem, postItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

// http://localhost:3002/items/ [GET]

router.get("/", getItems);

router.get("/:id",logMiddleware, getItem);

router.post("/", postItem);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);




export { router };

