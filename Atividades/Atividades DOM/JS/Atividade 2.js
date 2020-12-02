const nome = document.querySelector("#name");
const userList = document.querySelector(".userList");
var nomes = ["Diego", "Gabriel", "Lucas"];

function addLi(input, text) {
  const li = document.createElement("li");
  li.innerText = input ? text.value : text;
  userList.appendChild(li);
}

function adicionarNome() {
  addLi(true, nome);
}
nomes.map((n) => {
  addLi(false, n);
});
