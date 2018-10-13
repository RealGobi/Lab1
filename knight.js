
    // Arrayen som håller svaret på allt

var mojligarutor = [];

    // Rutor A-H i en array


var xRutor = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'];



function springare(ruta) {
 
     // X och Y koordinat: +2 eller - 2 steg, +1 eller -1 steg, det är så han får gå,
    // metoden filter lägger alla koordinater i en array
   // positionen får inte va mindre 0 och inte större än 9.

    var rutaX = xRutor.indexOf(ruta[0]) + 1;


    var rutaXposition = [rutaX + 2, rutaX - 2, rutaX + 1, rutaX - 1].filter(function(rutaPosition){
        return (rutaPosition > 0 && rutaPosition < 9);
    })


    var rutaY = parseInt(ruta[1]); 

    var rutaYposition = [rutaY + 2,rutaY - 2, rutaY + 1, rutaY - 1].filter(function(rutaPosition){
        return (rutaPosition > 0 && rutaPosition < 9);
    })

    //  Här loopas igenom hur många positioner som stämmer överrens med ovan nämnda argument, 
    // beroende på vilken position man har. Och om var möjligaDrag inte innehåller positionen, 
    // så pushar vi in den i den arrayen.

    for (let i = 0; i < rutaXposition.length; i++){
        for (let j = 0; j < rutaYposition.length;j++){
            if (Math.abs(rutaX - rutaXposition[i]) + Math.abs(rutaY - rutaYposition[j]) === 3){
                if (!mojligarutor.includes([rutaXposition[i], rutaYposition[j]])){
                    mojligarutor.push([rutaXposition[i], rutaYposition[j]]);
                }
            }
        }
    }

      // här skrivs längden på arrray: möjligaDrag ut, så vi ser hur många möjliga drag vi har.
     // retunera även arrayen så vi får se vilka koordinater som ligger i arrayen.
  

    console.log('Möjliga drag: ', mojligarutor.length);
    return mojligarutor;
}

// anger vi funktionen(samt vilken ruta vi börjar på)


console.log(springare('a3'));
