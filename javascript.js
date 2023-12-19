function onClick(inputValue) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, function (data, status) {
    if (status === "success") {
      const pokemonNames = data.results.forEach((pokemon) => {
        const h2Element = document.createElement("h2");
        h2Element.innerHTML = pokemon.name;
        console.log("Name with H2 tag ", h2Element);
        document.getElementById("displayedText").append(h2Element);
      });
    } else {
      console.log("Status was: " + status);
    }
  });
}
