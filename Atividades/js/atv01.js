const endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP",
};

const adress = ({ cidade, bairro, uf, rua, numero }) => {
  return `O usuário mora em ${cidade} / ${uf}, no bairro ${bairro}, na rua ${rua} com numero ${numero}.`;
};

console.log(adress(endereco));