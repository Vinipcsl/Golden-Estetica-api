import jwt from "jsonwebtoken";

const tokenSecreto = "essamerda123";

 function GerarToken(id_user){
    const token = jwt.sign({id_user}, tokenSecreto, {expiresIn: 99999});
    return token;
}

function ValidarToken(req, res, next){
    const tokenAutorisado = req.headers.authorization;

    if(!tokenAutorisado)
        return res.status(401).json({error: "Token não informado"});

    const [bearer, token] = tokenAutorisado.split(" ");
    jwt.verify(token, tokenSecreto, (err, tokenDecodificado) => {

        if(err)
            return res.status(401).json({error: "Token Inválido"});

        req.id_user = tokenDecodificado.id_user;
        next();
    });

}

export default { GerarToken, ValidarToken}