module.exports = {grootsteGetal}

/* Algoritmiek opgave #3
   Opdracht: pas de functie zo aan,
   dat de functie het grootste getal
   van a en b teruggeeft
*/

function grootsteGetal(a, b) {
  var uitkomst = undefined;
  // vul hieronder aan
  if (a > b){
    return a;
  }
  if (b > a){
    return b;
  }
  if (a === b){
    return a || b;
  }
  return uitkomst;
}
grootsteGetal(7,4);
grootsteGetal(2,9);