/*
    // Arrayen som håller svaret på allt
    
    var mojligaDrag = [];

    // Rutor A-H i en array

    var rutorAh = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];


function springaren(ruta) {
   
   
    // X och Y koordinat: +2 eller - 2 steg, +1 eller -1 steg, det är så han får gå,
    // metoden filter lägger alla koordinater i en array
    // positionen får inte va mindre 0 och inte större än 9.

    var rutaX = rutorAh.indexOf(ruta[0]) + 1; 

    var rutaXposition = [rutaX + 2, rutaX - 2, rutaX + 1, rutaX - 1].filter(function(rutaPosition) {
        return (rutaPosition > 0 && rutaPosition < 9);
    })


    var rutaY = parseInt(ruta[1]); 

    var rutaYposition = [rutaY + 2, rutaY - 2, rutaY + 1, rutaY - 1].filter(function(rutaPosition) {
        return (rutaPosition > 0 && rutaPosition < 9);
    })
    

    //  Här loopas igenom hur många positioner som stämmer överrens med ovan nämnda argument, 
    // beroende på vilken position man har. Och om var möjligaDrag inte innehåller positionen, 
    // så pushar vi in den i den arrayen.

    for (var i = 0; i < rutaXposition.length; i++) {
        for (var j = 0; j < rutaYposition.length; j++) {
            if (Math.abs(rutaX - rutaXposition[i]) + Math.abs(rutaY - rutaYposition[j]) === 3) {
              [rutaXposition[i], rutaYposition[j]];
                if (!mojligaDrag.includes([rutaXposition[i], rutaYposition[j]])) {
                    mojligaDrag.push([rutaXposition[i], rutaYposition[j]]);
                } 
            }
        }
    }
  // här skrivs längden på arrray: möjligaDrag ut, så vi ser hur många möjliga drag vi har.
  // retunera även arrayen så vi får se vilka koordinater som ligger i arrayen.
  
    console.log ('Möjliga drag:', mojligaDrag.length);
    return mojligaDrag;
}


// anger vi funktionen(samt vilken ruta vi börjar på)
console.log(springaren('a1'));

*/




function getNextPositions(start) {
    var moves = [
      { x: -2, y: -1 },
      { x: -2, y: +1 },    
      { x: -1, y: -2 },    
      { x: -1, y: +2 },    
      { x: +1, y: -2 },    
      { x: +1, y: +2 },    
      { x: +2, y: -1 },    
      { x: +2, y: +1 }
    ];
  
    var positions = [];
  
    for (var i = 0; i < moves.length; i++) {
      var move = moves[i];
      var position = {};
      position.x = start.x + move.x;
      position.y = start.y + move.y;
      positions.push(position);
    }
  
    return positions;
  }
  
  function countMovesTo(destination, depth, cache) {
    depth = depth || 0;
    cache = cache || {};
    var result = (cache[destination.x]||{})[destination.y];
  
    if (result) {
      return result;
    }
  
    if (destination.x === 0 && destination.y === 0) {
      result = 0;
    } else if (depth > 100) {
      result = -2;
    } else {
      var minMoves = Infinity;
      var nextPositions = getNextPositions(destination);
  
      for (var i = 0; i < nextPositions.length; i++) {
        var nextPosition = nextPositions[i];
        var result = countMovesTo(nextPosition, depth + 1, cache);
  
        if (result < 0) {
          continue;
        }
  
        // console.log('found at moves', result);
        minMoves = Math.min(minMoves, 1 + result);
      }
  
      if (minMoves === Infinity) {
        result = -2
      } else {
        result = minMoves
      }
    }
  
    cache[destination.x] = cache[destination.x] || {};
    cache[destination.x][destination.y] = result;
  
    return result;
  }
  
  function solution(A, B) {
    return countMovesTo({x: A, y: B })
  }
  
  console.log(solution(4, 5));