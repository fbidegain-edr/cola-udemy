var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', () => {
    console.log('Usuario conectado');
});

socket.on('disconnect', () => {
    console.log('Usuario desconectado');
});


socket.on('ultimoEstado', (ultimoEstado) => {
    label.text(ultimoEstado.actual);
})

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});