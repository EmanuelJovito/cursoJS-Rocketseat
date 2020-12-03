function experiencia(anos){
  if (anos >=0 && anos<=1){
    return "Iniciante"
  }
  if (1<anos && anos<=3){
    return "Intermediário"
  }
  if (3<anos && anos<=6){
    return "Avançado"
  }
  if (anos>=7){
    return "Jedi Master"
  }
}
let anosEstudo=8

console.log(experiencia(anosEstudo));
