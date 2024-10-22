import repoDoutor from "../repositories/repository.doutores.js";

async function Listar(nome) {
    
    const doutores = await repoDoutor.Listar(nome);
    
    return doutores;
}

async function Inserir(nome, especialidade, icon) {
    
    const doutor = await repoDoutor.Inserir(nome, especialidade, icon);
    
    return doutor;
}

async function Editar(id_doutor, nome, especialidade, icon) {
    
    const doutor = await repoDoutor.Editar(id_doutor, nome, especialidade, icon);
    
    return doutor;
}


async function Deletar(id_doutor) {
    
    const doutor = await repoDoutor.Deletar(id_doutor,);
    
    return doutor;
}

async function ListarServicos(id_doutor) {
    
    const servicos = await repoDoutor.ListarServicos(id_doutor);
    
    return servicos;
}


export default {Listar, Inserir, Editar, Deletar, ListarServicos }
