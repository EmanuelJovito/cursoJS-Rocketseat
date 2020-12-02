const btnElement = document.querySelector(".botão");
const ContainerboxElement = document.querySelector(".box-container");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

btnElement.addEventListener("click", () => {
  const box = document.createElement("div");
  var newColor = getRandomColor(); // #E943F0
  box.setAttribute("class", newColor)
  box.style.width = "100px";
  box.style.height = " 100px";
  box.style.marginTop = "20px";
  box.style.backgroundColor = "red";
  box.addEventListener("mouseenter",() => {
    box.style.backgroundColor = newColor
  })

  box.addEventListener("mouseout",() => {
    box.style.backgroundColor = "red"
  })
  ContainerboxElement.appendChild(box);
});
