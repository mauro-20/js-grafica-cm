var field = document.getElementById('field');

for (var i = 1; i <= 100; i++){
  field.innerHTML += `<div class="square">${i}</div>`
}

field.addEventListener('click',
  function (e) {
    e.target.classList.toggle('clicked')
  }
)