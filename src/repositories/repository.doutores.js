import { query } from "../database/sqlite.js";

async function Listar(nome) {
    
    let filtro = [];

   let sql = "select * from doutores ";

   if(nome){
       sql = sql + "where nome like ? ";
       filtro.push('%'+nome+'%')
   }

   sql = sql + "order by nome";
   const doutores = await query(sql, filtro);
    
    return doutores;
}

async function Inserir(nome, especialidade, icon) {
    let filtro = [];

    let sql = `INSERT INTO doutores (nome, especialidade, icon) VALUES (?, ?, ?)
             RETURNING id_doutor`;
 
   
    const doutor = await query(sql, [nome, especialidade, icon]);
     
     return doutor[0];
}

async function Editar(id_doutor, nome, especialidade, icon) {

    let sql = `update  doutores set nome=?, especialidade =?, icon= ?
     where id_doutor= ?  `;
 
   
     await query(sql, [nome, especialidade, icon, id_doutor]);
     
     return {id_doutor};
}

async function Deletar(id_doutor) {

    let sql = `delete from doutores 
     where id_doutor= ?  `;
 
   
     await query(sql, [id_doutor]);
     
     return {id_doutor};
}

export default {Listar, Inserir, Editar, Deletar }