function onClick(inputName) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, function (data, status) {
    if (status == "success") {
      displayPokemonList(data);
    } else {
      console.log("Status was " + status);
    }
  });
}

async function displayPokemonList(data) {
  const pokemonList = data.results;
  let pokemonListWithImages = await retrievePokemonImages(pokemonList);

  buildHTML(pokemonListWithImages);
}

async function retrievePokemonImages(pokemonList) {
  let pokemonListWithImages = [];
  for (pokemon of pokemonList) {
    const pokemonReference = { name: pokemon.name, image: "" };
    await $.get(pokemon.url, (data, status) => {
      if (status === "success") {
        const pokemonImageUrl =
          data.sprites.versions["generation-v"]["black-white"].animated
            .front_default;
        pokemonReference.image = pokemonImageUrl;
        pokemonListWithImages.push(pokemonReference);
        console.log(pokemonReference);
      } else {
        console.log("Failed to retrieve image for ", pokemon.name);
      }
    });
  }
  return pokemonListWithImages;
}

function buildHTML(pokemonList) {
  const pokemonHtmlList = pokemonList.map((pokemon) => {
    const pokemonContainer = document.createElement("div");
    pokemonContainer.setAttribute(
      "style",
      "width: 250px; display: inline-block;" +
        "margin: 5px; backround-color: cornflower; border-radius: 30px"
    );
    const title = document.createElement("button");
    title.innerHTML = pokemon.name;
    pokemonContainer.append(title);

    const image = document.createElement("img");
    image.setAttribute("src", pokemon.image);
    image.setAttribute("style", "width: 100px; height:100px;");
    pokemonContainer.append(image);

    return pokemonContainer;
  });
  $("#displayedText").html(pokemonHtmlList);
}
