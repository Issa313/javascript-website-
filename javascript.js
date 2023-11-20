function onClick(inputValue) {
    document.getElementById("displayedText").innerHTML = "JUMP SCARE!!!!!!!!!!!";
    const user = {name: 'Bob'};
    console.log('Hello ' + user.name);

    const names = ['Sally', 'Jerome']
    const users = [{name: 'Sally'}, {name: 'Jerome'}]
    console.log ('First name in list -----',names[0]);

    console.log ('Second name in list of objects -----',users[1].name);
    const url = 'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
        if (status === 'success') {
            const pokemonNames = data.results.map(showNames)
            console.log(pokemonNames);
            document.getElementById("displayedText").innerHTML = pokemonNames.join('      ');
        }
    });
    alert('Hello, ' + inputValue + '!');
    
}

function showNames(pokemon) {
    return pokemon.name 
}