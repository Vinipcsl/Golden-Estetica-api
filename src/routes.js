import { Router } from "express";
import controllerDoutores from "./controllers/controller.doutores.js";
import controllerUsuarios from "./controllers/controller.usuarios.js";
import controllerAgendamento from "./controllers/controller.agendamento.js"
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
router.get("/user/perfil", jwt.ValidarToken, controllerUsuarios.Perfil);

//rotas de reserva
router.get("/agendamentos", jwt.ValidarToken, controllerAgendamento.ListarPorUsuario);
router.post("/agendamentos", jwt.ValidarToken, controllerAgendamento.Inserir)





export default router;