const btnElement = document.querySelector(".botão");
      const ContainerboxElement = document.querySelector(".box-container")

      btnElement.addEventListener("click",() => {const box = document.createElement("div");
      box.style.width = "100px";
      box.style.height = " 100px";
      box.style.marginTop = "20px";
      box.style.backgroundColor = "red";
      
      ContainerboxElement.appendChild(box);
      })
