import repoUser from "../repositories/repository.usuarios.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Inserir(nome, email, senha) {

    const hashSenha = await bcrypt.hash(senha, 10);
    const usuario = await repoUser.Inserir(nome, email, hashSenha);

     usuario.token = jwt.GerarToken(usuario.id_usuario);
    
    return usuario;
}

async function Login(email, senha) {
    
    
    const usuario = await repoUser.ListarByEmail(email);

    if (usuario.length == 0){
        return[]
    }
    else{
        
        if (await bcrypt.compare(senha, usuario.senha)){
            delete usuario.senha;

            usuario.token = jwt.GerarToken(usuario.id_usuario);
            return usuario;
        } else{
            return [];
        }
    }    
}



export default { Inserir, Login }
