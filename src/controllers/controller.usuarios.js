import serviceUsuarios from "../service/service.usuarios.js"


async function Inserir(req, res) {

    const {nome, email, senha} = req.body;

    const usuario = await serviceUsuarios.Inserir(nome, email, senha);


    res.status(201).json(usuario);
}

async function Login(req, res) {

  
    const {email, senha} = req.body;

    const usuario = await serviceUsuarios.Login(email, senha);

    if(usuario.length == 0)
        res.status(401).json({error: "E-mail ou senha inválida"});
    else
        res.status(200).json(usuario);
}

async function Perfil(req, res) {

    const idUsuario = req.id_user;
    const usuario = await serviceUsuarios.Perfil(idUsuario);


    res.status(200).json(usuario);
}

export default { Inserir, Login, Perfil }