import { Router } from "express";
import { getItems } from "../controllers/order";
import { checkJwt } from "../middleware/session";

//esta ruta solo pueden acceder personas que tengan una session activa 
//que tenga un JWT Valido 


const router = Router();

router.get('/', checkJwt, getItems)
export {router};

