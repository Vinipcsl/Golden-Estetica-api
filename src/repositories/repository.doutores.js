import { query } from "../database/sqlite.js";

async function Listar() {
    

   let sql = "select * from doctors order by name";

   const doutores = await query(sql, []);
    
    return doutores;
}


export default {Listar }