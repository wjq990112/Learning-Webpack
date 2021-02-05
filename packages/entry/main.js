const decrease = require('./decrease');

function main() {
  const root = document.querySelector('#app');

  const decButton = document.createElement('button');
  decButton.innerHTML = '-';
  decrease(decButton);

  root.append(decButton);
}

main();
