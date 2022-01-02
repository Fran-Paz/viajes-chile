$('.carousel').carousel({
    interval: 4000
})


$("#contact-form").submit(function (event) {
    event.preventDefault();
    console.log("hola mundo");

    var nombre = $("#inputName").val();
    var asunto = $("#input").val();
    var mensaje = $("#inputMessage").val();

    console.log("estos son los datos capturados del formulario")
    console.log({
        nombre,
        asunto,
        mensaje
    })

    setTimeout(function () {
        $("#inputName").val("");
        $("#input").val("");
        $("#inputMessage").val("");
        alert("Mensaje enviado con éxito, pronto alguien te contactará")
    }, 2000)
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});


$(".title").click(function (event) {
    var titleElement = event.target;
    $(titleElement).toggleClass("text-warning")
})