function getUserData() {
  const user = document.querySelector("#usuario").value;
  const repositories = document.querySelector("#repositories");
  const erro = document.querySelector("#error")
  const carreg = document.querySelector("#carregando")

  carreg.setAttribute('class', 'show')
  erro.setAttribute('class', 'close')

  return fetch(`https://api.github.com/users/${user}/repos`)
    .then((r) => r.json(r))
    .then((r) => {
      repositories.innerHTML = "";
      carreg.setAttribute('class', 'close')
      r.map((repo) => {
        const li = document.createElement("li");
        li.innerText = repo.name;
        repositories.appendChild(li);
      });
    })
    .catch(err=>{
      carreg.setAttribute('class', 'close')
      erro.setAttribute('class', 'show')
      erro.innerText = "Repositorios do usuario não encontrados"
    })
}
