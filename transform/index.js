const container = document.querySelector(".container");
let time = 5;

setInterval(() => {
  container.style.transform = `rotateY(${(time += 5)}deg)`;
}, 50);
