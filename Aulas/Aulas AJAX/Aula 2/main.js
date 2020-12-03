var minhaPromise = function () {
  return fetch("https://api.github.com/users/EmanuelJovito")
    .then((r) => r.json())
    .then((r) => console.log(r));
};

minhaPromise()
  