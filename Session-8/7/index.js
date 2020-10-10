async function data(){
let someurl = await fetch('http://quotes.rest/qod.json');
let API = await someurl.json();
console.log(API);
let quote = API.contents.quotes[0].quote;
let author = API.contents.quotes[0].author;
document.getElementById('quote').innerHTML = quote;
document.getElementById('author').innerHTML = author;
}
data();
