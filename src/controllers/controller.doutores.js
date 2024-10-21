import serviceDoutores from "../service/service.doutores.js"

 async function Listar(req, res) {

    const nome = req.query.nome;
    const doutores = await serviceDoutores.Listar(nome);


    res.status(200).json(doutores);
}

async function Inserir(req, res) {

    const {nome, especialidade, icon} = req.body;

    const doutor = await serviceDoutores.Inserir(nome, especialidade, icon);


    res.status(201).json(doutor);
}

async function Editar(req, res) {

    const id_doutor = req.params.id_doutor;
    const {nome, especialidade, icon} = req.body;

    const doutor = await serviceDoutores.Editar(id_doutor, nome, especialidade, icon);


    res.status(200).json(doutor);
}

async function Deletar(req, res) {

    const id_doutor = req.params.id_doutor;

    const doutor = await serviceDoutores.Deletar(id_doutor);


    res.status(200).json(doutor);
}

export default {Listar, Inserir, Editar, Deletar }