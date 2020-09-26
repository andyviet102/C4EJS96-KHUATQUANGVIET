//INIT
// let movies = {
//     title: 'The dark night up',
//     year: 2012,
//     rate: 8.4,
// };
// console.log(movies);
//READ1
//A
// console.log('Cách 1 là:')
// console.log(movies.title);
// console.log(movies.year);
// console.log(movies.rate);
// console.log('Cách 2 là:')
// console.log(movies[title]);
// console.log(movies[year]);
// console.log(movies[rate]);
//B
// console.log('Khi truy cập 1 property ko tồn tại thì nó sẽ trả về là undefined như ví dụ sau:')
// console.log(movies.actor);
//READ2
// let x =prompt('thích nhạc gì viết vào đây')
// let list = {
//     Sport:'Bóng rổ',
//     game:'dota2',
//     band:'BlackPink',
//     music:x,
// }
//  console.log(list.Sport.toUpperCase())
//  console.log(list.game.toUpperCase())
//  console.log(list.band.toUpperCase())
//  console.log(list.music.toUpperCase())
//READ3
// let x =prompt('what  do u want to know')
// let list = {
//         Sport:'Bóng rổ',
//         game:'dota2',
//         band:'BlackPink',
// }
// let y =(list [x]);
// if (x== null || x== underfined)
// {
//     alert('does not exits in our data');
// }else {
//     alert(x);
// }
//UPDATE
//1
// console.log(movies.rate);
// movies['rate'] = 8.7;
// console.log(movies['rate']);
// movies.rate +=0.5;
// console.log(movies.rate);
//2
// let x = prompt('what u want to update') 
// let movies = {
//         title: 'The dark night up',
//         year: 2012,
//         rate: 8.4,
//     };
// let y=prompt('what is the update')
//   movies[x]= y
// console.log(movies);
//CREATE
// let m =prompt('what do u want to know')
// let movies = {
//         title: 'The dark night up',
//         year: 2012,
//         rate: 8.4,
//     };
// let x =(movies [m])
// if (x == null || x == undefined) {
//     alert(m+'does not exits in our data we will add new');
//     let n=prompt('what u want add new')
//     movies[m]=n
// } else {
//     alert( x);
// }
//  console.log(movies)

// ARRAY OF OBJECT1
//A
// let movie1 ={
//   title:'Attack on Titans',
//   year:2013,
//   rate:8.6,
// }
// let movie2 ={
//   title:'My boss my hero',
//   year:2006,
//   rate:8.2,
// }
// let movie3 ={
//   title:'Mind hunter',
//   year:2017,
//   rate:5.5,
// }
// let moviesArr=[ ];
// console.log(moviesArr);
// moviesArr.push(movie1);
// moviesArr.push(movie2);
// moviesArr.push(movie3);
// let x = moviesArr[0];
//B
// console.log(x);
//C
// let y = moviesArr[2];
// console.log(y.title);
//D
// for (let i=0; i<moviesArr.length; i++){
//     let p = moviesArr[i];
//     console.log(p);
// }
//E
// for(let i=0;i<x.length;i++)
//   {
//     let z=(x[i])
    
//     console.log(z.title)
//     console.log('rate '+ z.rate)
//     console.log('year'+ z.year)   
//   }
//F
// movie3.rate +=0.7;
// console.log(y.rate);
// console.log(y);
//Object-object containing array
// let movies = {
//     title: 'three pig',
//     year: 2012,
//     rate: 8.4,
//     casts: ['pig1 pig2 pig3'],
// };
// let x=prompt('add new cast to the movie')
// movies.casts.push(x)
// console.log(movies.title)
// console.log('year: '+movies.year)
// console.log('rate: ' +movies.rate)
// console.log('casts :'+movies.casts)
// Object and Array mix
// let movie1 ={
//   title:'Attack on Titans',
//   year:2013,
//   rate:8.6,
//   casts:'levi'
// }
// let movie2 ={
//   title:'My boss my hero',
//   year:2006,
//   rate:8.2,
//   casts: 'hero'
// }
// let movie3 ={
//   title:'Mind hunter',
//   year:2017,
//   rate:5.5,
//   casts: "hunter"
// }
// let moviesArr=[ ];
//  moviesArr.push(movie1);
//  moviesArr.push(movie2);
//  moviesArr.push(movie3);
//  for(let i=0 ;i < moviesArr.length; i++){
//     console.log(moviesArr[i]);
// }
/////////////////////
// //OOA
// let moviesArr=[ ];
// let movie1 ={
//   title:'Attack on Titans',
//   year:2013,
//   rate:8.6,
//   casts:'levi'
// }
// let movie2 ={
//   title:'My boss my hero',
//   year:2006,
//   rate:8.2,
//   casts: 'hero'
// }
// let movie3 ={
//   title:'Mind hunter',
//   year:2017,
//   rate:5.5,
//   casts: "hunter"
// }
 
// movies.push(movie1)
// movies.push(movie2)
// movies.push(movie3)
let jobFilm = {
  total_results: 3,
  results: [
      {
          popularity: 512.119,
          vote_count: 460,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
          id: 475557,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
          original_language: "en",
          original_title: "Joker",
          genres: [
              80,
              18,
              53
          ],
          title: "Joker",
          vote_average: 8.8,
          overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
          release_date: "2019-10-04"
      },
      {
          popularity: 241.402,
          vote_count: 598,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
          id: 429203,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
          original_language: "en",
          original_title: "The Old Man & the Gun",
          genres: [
              35,
              80,
              18
          ],
          title: "The Old Man & the Gun",
          vote_average: 6.3,
          overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
          release_date: "2018-09-28"
      },
      {
          popularity: 233.735,
          vote_count: 4139,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
          id: 429617,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
          original_language: "en",
          original_title: "Spider-Man: Far from Home",
          genres: [
              28,
              12,
              878
          ],
          title: "Spider-Man: Far from Home",
          vote_average: 7.6,
          overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
          release_date: "2019-07-02"
      },
      {
          popularity: 158.333,
          vote_count: 323,
          video: false,
          poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
          id: 522938,
          adult: false,
          backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
          original_language: "en",
          original_title: "Rambo: Last Blood",
          genres: [
              28,
              53
          ],
          title: "Rambo: Last Blood",
          vote_average: 6.1,
          overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
          release_date: "2019-09-20"
      },
  ]
}
for(let i=0;i<movies.length;i++)
  {
    let x=(movies[i])
    
    console.log(x.title)
    console.log('rate :'+ x.rate)
    console.log('year :'+ x.year)
    console.log('casts :'+ x.character)
  }

// //OOA2

console.log('co '+ results.length+ ' phim')
console.log(results[0])
console.log(results[0].titel)
console.log(results[0]['vote_average'])
console.log(results[0].genres )

console.log('co '+ results.length+ ' phim')
console.log(results[0])
for(let i=0;i<results.length;i++)
{
console.log(results[i].titel)
console.log(results[i]['vote_average'])
console.log(results[i].genres )
}

// ///
let x =prompt('the minimum rate you want')
if(x>=8.8)
  {
    console.log(results[0])
  }
else if(x>=7.6)
{
  console.log(results[2])
  console.log(results[0])
}
else if(x>=6.3)
{
  console.log(results[0])
      console.log(results[1])
  console.log(results[2])
}
else if(x>=6.1)
{
   console.log(results[0])
      console.log(results[1])
  console.log(results[2])
      console.log(results[3])
}


