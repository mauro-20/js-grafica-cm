/* squareGenerator genera un certo numero di quadrati 
*  @param num numero di quadrati da generare 
*/
function squareGenerator(num) {
  var field = document.getElementById('field');
  
  for (var i = 1; i <= num; i++){
    field.innerHTML += `<div class="square">${i}</div>`
  }
  
}

// chiedo all'utente il numero di quadrati da inserire
var squareNumber = prompt('inserisci il numero di quadrati');

// genero i quadrati
squareGenerator(squareNumber)

// al clik il quadrato diventa rosso ed appare un alert() con il numero del quadrato selezionato
field.addEventListener('click',
function (e) {
  e.target.classList.add('clicked')
  alert(e.target.innerHTML)
 }
)