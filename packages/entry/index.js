const increase = require('./increase');

function index() {
  const root = document.querySelector('#app');

  const number = document.createElement('div');
  number.id = 'number';
  number.innerHTML = 0;

  const incButton = document.createElement('button');
  incButton.innerHTML = '+';
  incButton.style = 'margin-right: 10px';
  increase(incButton);

  root.append(number, incButton);
}

index();
