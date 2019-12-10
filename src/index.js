import './styles.css';

const bgc = ['flowers.jpg', 'flowers.jpg'];
let bgcActive = 1;

setInterval(() => {
  const url = `url('./images/${bgc[bgcActive - 1]}')`;

  if (bgcActive < bgc.length) {
    bgcActive += 1;
  } else {
    bgcActive = 1;
  }
  document.body.style.backgroundImage = url;
}, 5000);
