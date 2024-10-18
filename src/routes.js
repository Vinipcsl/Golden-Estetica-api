import { Router } from "express";
import controllerDoutores from "./controllers/controller.doutores.js";

const router = Router();

router.get("/doutores", controllerDoutores.Listar);


export default router;