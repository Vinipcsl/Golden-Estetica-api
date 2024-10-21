import { Router } from "express";
import controllerDoutores from "./controllers/controller.doutores.js";

const router = Router();

//rota de doutores
router.get("/doutores", controllerDoutores.Listar);
router.post("/doutores", controllerDoutores.Inserir);
router.put("/doutores/:id_doutor", controllerDoutores.Editar);
router.delete("/doutores/:id_doutor", controllerDoutores.Deletar);

export default router;