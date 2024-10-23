import { query } from "../database/sqlite.js";

async function Inserir(nome, email, senha) {
    let filtro = [];

    let sql = `INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)
             RETURNING id_user`;
 
   
    const usuario = await query(sql, [nome, email, senha]);
     
     return usuario[0];
}

async function ListarByEmail(email) {
    

   let sql = "select * from users where email = ?";

   const usuario = await query(sql, [email]);

   if (usuario.length == 0)
    return []
   else    
    return usuario[0];
}


async function Perfil(id_user) {
    

   let sql = "select id_user, nome, email from users where id_user = ? ";

   const usuario = await query(sql, [id_user]);
    
    return usuario[0];
}


export default { Inserir, ListarByEmail, Perfil }