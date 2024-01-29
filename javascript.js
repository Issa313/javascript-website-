function onClick(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, function (data, status) {
    if (status == "success") {
      addNamesToHTML(data);
    } else {
      console.log("Status was " + status);
    }
  });
}

function addNamesToHTML(data) {
  const pokemonList = data.results.map((pokemon) => {
    const pokemonContainer = document.createElement("div");
    pokemonContainer.setAttribute(
      "style",
      "width: 250px; display: inline-block;" +
        "margin 5px; backround-color: cornflowerblue; border-radius: 30px;"
    );
    const title = document.createElement("button");
    title.innerHTML = pokemon.name;
    pokemonContainer.append(title);
    console.log("Name with H2 tag: ", pokemonContainer);

    return pokemonContainer;
  });
  $("#displayedText").html(pokemonList);
}
