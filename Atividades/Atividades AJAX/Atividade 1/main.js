function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (idade >= 18) {
        resolve("Maior que 18");
      } else if (idade < 18) {
        reject("Menor que 18");
      } else {
        reject("Ocorreu um erro desconhecido");
      }
    }, 2000);
  });
}

function getData() {
  const idade = Number(document.querySelector("#idade").value)
  const msg = document.querySelector(".response")
  
  checaIdade(idade)
    .then((res) => {
      msg.innerText = res
    })
    .catch((err) => {
      msg.innerText = err
    });
}

//  checaIdade(20)
//   .then(function() {
//   console.log("Maior que 18");
//   })
//   .catch(function() {
//   console.log("Menor que 18");}) const idade= document.querySelector("#idade")
