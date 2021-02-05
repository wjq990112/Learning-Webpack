import styles from './index.module.css';

(function render(element: HTMLElement) {
  const container = document.createElement('div');
  container.className = styles.container;
  container.addEventListener('click', function click(event) {
    const target = event.target as HTMLElement;

    switch (target.id) {
      case 'incButton':
        counter.innerText = String(Number(counter.innerText) + 1);
        return;
      case 'decButton':
        counter.innerText = String(Number(counter.innerText) - 1);
        return;
      default:
        return;
    }
  });

  const title = document.createElement('h1');
  title.innerText = 'Hello, Webpack!';

  const counter = document.createElement('div');
  counter.innerText = '0';

  const incButton = document.createElement('button');
  incButton.id = 'incButton';
  incButton.className = styles.button;
  incButton.innerText = '+';

  const decButton = document.createElement('button');
  decButton.id = 'decButton';
  decButton.className = styles.button;
  decButton.innerText = '-';

  const btnContainer = document.createElement('div');
  btnContainer.append(incButton, decButton);

  container.append(title, counter, btnContainer);

  element.append(container);
})(document.getElementById('app') as HTMLElement);
