module.exports = function increase(element) {
  element.addEventListener('click', function click() {
    document.querySelector('#number').innerHTML =
      Number(document.querySelector('#number').innerHTML) + 1;
  });
};
