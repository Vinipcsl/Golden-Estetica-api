import serviceDoutores from "../service/service.doutores.js"

 async function Listar(req, res) {


    const doutores = await serviceDoutores.Listar();


    res.status(200).json(doutores);
}

export default {Listar }