const usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"],
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"],
  },
];

function habilidadesUsuario(usuarios){
  usuarios.map((u)=>{
   return console.log(`O ${u.nome} possui as habilidades: ${u.habilidades}`)
  })
}

habilidadesUsuario(usuarios)
