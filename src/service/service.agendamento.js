import repoAgendamento from "../repositories/repository.agendamento.js";

async function ListarPorUsuario(id_user) {
    
    const agendamento = await repoAgendamento.ListarPorUsuario(id_user);
    
    return agendamento;
}

async function Inserir(id_user, id_doutor, id_servico, booking_date, booking_hour) {
    
    const agendamento = await repoAgendamento.Inserir(id_user, id_doutor, id_servico, booking_date, booking_hour);
    
    return agendamento;
}

export default {ListarPorUsuario, Inserir}