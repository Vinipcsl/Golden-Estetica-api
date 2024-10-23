import serviceAgendamento from "../service/service.agendamento.js"

 async function ListarPorUsuario(req, res) {

    const idUsuario = req.query.id_user;
    const agendamento = await serviceAgendamento.ListarPorUsuario(idUsuario);


    res.status(200).json(agendamento);
}

async function Inserir(req, res) {

    const id_user = req.id_user;
    const {id_doutor, id_servico, booking_date, booking_hour} = req.body;

    const agendamento = await serviceAgendamento.Inserir(id_user, id_doutor, id_servico, booking_date, booking_hour);

    res.status(201).json(agendamento);
}

export default {ListarPorUsuario, Inserir}