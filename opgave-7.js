module.exports = {gemiddelde}

/* Algoritmiek opgave #7
   Opdracht: pas de functie zo aan, dat de functie het gemiddelde geeft
   van een array met getallen.
   Ga ervan uit dat de parameter cijfers een array met numbers is.
   Hint: je hebt een for-loop en cijfers.length nodig
*/

function gemiddelde(cijfers) {
  // cijfers is een array
  var uitkomst = undefined;
  var som = 0;
  var aantal = 0;
  for (var i = 0; i < cijfers.length; i++){
    som = som + cijfers[i];
    aantal = aantal + 1;
    return  cijfers/cijfers.length;
    
  }
  
  return uitkomst;
}
