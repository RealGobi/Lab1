

function springare(ruta) {

    var mojligarutor = [];
    var xRutor = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'];
    var rutaX = xRutor.indexOf(ruta[0]) + 1;
    var rutaY = parseInt(ruta[1]);   


    var rutaXposition = [rutaX + 2, rutaX + 1, rutaX - 1].filter(function(rutaPosition){
        return (rutaPosition > 0 && rutaPosition < 9);
    })

    var rutaYposition = [rutaY + 2, rutaY + 1, rutaY - 1].filter(function(rutaPosition){
        return (rutaPosition > 0 && rutaPosition < 9);
    })
