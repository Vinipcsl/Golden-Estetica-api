import { query } from "../database/sqlite.js";

async function ListarPorUsuario(id_user) {
    
   let sql = `select a.id_agendamento, s.descricao as servico, d.nome as doutor, d.especialidade, a.booking_date, a.booking_hour, u.nome as cliente, ds.preco
   from agendamentos a
   join servicos s on (s.id_servico = a.id_servico)
   join doutores d on (d.id_doutor = a.id_doutor)
   join users u on (u.id_user = a.id_user)
   join doutores_servicos ds on (ds.id_doutor = a.id_doutor and
                                 ds.id_servico = a.id_servico)
   where a.id_user = ? 
   order by a.booking_date, a.booking_hour`;

   const agendamento = await query(sql, id_user);
    
    return agendamento;
}

async function Inserir(id_user, id_doutor, id_servico, booking_date, booking_hour) {

    let sql = `INSERT INTO agendamentos (id_user, id_doutor, id_servico, booking_date, booking_hour) VALUES (?, ?, ?, ?, ?)
             RETURNING id_agendamento`;
 
   
    const agendamento = await query(sql, [id_user, id_doutor, id_servico, booking_date, booking_hour]);
     
     return agendamento[0];
}

export default {ListarPorUsuario, Inserir}