import { Router } from "express";
import controllerDoutores from "./controllers/controller.doutores.js";
import controllerUsuarios from "./controllers/controller.usuarios.js";
import jwt from "./token.js";

const router = Router();

//rota de doutores
router.get("/doutores", jwt.ValidarToken, controllerDoutores.Listar);
router.post("/doutores", jwt.ValidarToken, controllerDoutores.Inserir);
router.put("/doutores/:id_doutor", jwt.ValidarToken, controllerDoutores.Editar);
router.delete("/doutores/:id_doutor", jwt.ValidarToken, controllerDoutores.Deletar);

//rotas de serviços dos doutores
router.get("/doutores/:id_doutor/servicos", jwt.ValidarToken, controllerDoutores.ListarServicos);

//rotas de usuários
router.post("/user/registro", controllerUsuarios.Inserir);
router.post("/user/login", controllerUsuarios.Login);

//rotas de reserva






export default router;