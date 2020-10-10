console.log("Câu 2:")
let someurl = fetch('https://pokeapi.co/api/v2/pokemon/pikachu/');
someurl 
.then(connection =>
{
    console.log('Connected');
    console.log(connection);
    const josonPromise = connection.json();
    console.log(josonPromise);
    josonPromise.then(posts => console.log(posts))
});