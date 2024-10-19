import repoDoutor from "../repositories/repositoy.doutores.js";

async function Listar() {
    
    const doutores = await repoDoutor.Listar();
    
    return doutores;
}


export default {Listar }