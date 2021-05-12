const cube = document.getElementById("example-element");
const checkbox = document.getElementById("preserve");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    cube.style.transformStyle = "preserve-3d";
  } else {
    cube.style.transformStyle = "flat";
  }
});
