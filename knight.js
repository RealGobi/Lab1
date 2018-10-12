

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

    for (let i = 0; i < rutaXposition.length; i++){
        for (let j = 0; j < rutaYposition.length;j++){
            if (Math.abs(rutaX - rutaXposition[i]) + Math.abs(rutaY - rutaYposition[j]) === 3){
                if (!mojligarutor.includes([rutaXposition[i], rutaYposition[j]])){
                    mojligarutor.push([rutaXposition[i], rutaYposition[j]]);
                }
            }
        }
    }

    console.log('Möjliga drag: ', mojligarutor.length);
    return mojligarutor.length;
}
console.log(springare('a1'));
