///ddaay laf Arr nhe 1-292

// setTimeout(function(){ alert("uidoioidevailonmaythangoatcon"); }, 10000);

// let arr = ['ailaviet','khuatviettramtinh','khuatquangviet','vietvailon'];
// console.log(arr)

// let menu = ['bun', 'com'];
// console.log(menu)

// let movie  =['phim1','phim2', 'phim3'];
// console.log(movie);

//  let newItem = prompt ("nhap phim muon them vao");
// movie.push(newItem);
// console.log(movie);

// let i = prompt ("nhap vao bo phim ban muon xem")
// console.log(movie[i]);
// let i = prompt("thich vi tri nao thi nhap vao day");
// let item = prompt ("thich gi thi viet vao day");
// movie[i] = item;
// console.log(movie[i]);
// let x = prompt ("thich xoa vi tri nao");
// let y = prompt ("thich xoa bao nhieu");
// movie.splice(x,y);
// console.log(movie);

// console.log(movie[i]);

// for( let i = 0 ; i<movie.length; i++){
//     console.log(movie[i]);
// }
   

// let arr = [ 'batman' ,'up', 'attack on titans', 'my boss my hero',
// 'con cho'];
// for( i=0 ; i<arr.length; i++){
//     arr[i] = arr[i].toLowerCase();
// }
// console.log(arr)
// for( i=0; i<arr.length/2 ; i++){
//     console.log(movie[i]);
// }

// for ( i =0 ; i<arr.length; i++){
//     console.log((i+1)+'-'+ arr [i])  
// }\

// if (n){
//     console.log("is number")
// }
// else{
//     console.log('not number')
// }
// let n;
// while (true) {
//     n = Number(prompt('enter a number...'))
//     if (n){
//         break;
//     }
// }
//   console.log(n);
// let n;
// while(true){
//     n = prompt("enter a name...")
//     if (n.length>15){
//         alert('name so long');
//         break;
//     }
//     else{
//         alert('good name');
//     }
// }

// alert('How many legs does a spider have ?\n \
//     1. None \n\
//     2. 4 legs \n\
//     3. 8 legs \n\
//     4. 12 legs');

//     while(true){
// let n = prompt("nhap dap an vao day");
// if (n == null || n== undefined){
//     alert("say bye");
//     break;
// } else{
//     if ( n<1) {
//         alert("cau tra loi ko hop le, vui long nhap 1,2,3,4");
//     }else if(n==3){
//         alert('ban da tra loi dung');
//         alert('nhen co 4x2=8 legs');
//         break;
//     }else if (n <3){
//         alert('dap an sai, tl lai');
//     } else if (n ==4){
//         alert("sai roi hehe");
//     } else{
//         alert('dmm ngu vcl')
//     }
// }}


// //cau 1
// console.log("bai 1: doi cho cac phan tu:");
// let a,b,c;

// console.log("cach 1:====================================");
// a = 5; 
// b = 6;
// console.log("a = " + a +"; b = " + b);

// c = a;
// a = b;
// b = c;
// console.log
// ("a = " + a +";b = "+b);

// console.log("cach 2:====================================");
// a = 5; 
// b = 6;
// console.log("a = " +a+"; b= "+b);

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a = "+a+ "; b= " +b);

// // Cau 2
// console.log('bai 2: Split string to arr');
//  const s = "code for everyone";
//  console.log(s)
//  let a = s.split(" ");
//  console.log(a);
// // Cau 3
// console.log("bai 3: demo spread operator");
// let subject = ["philosophy", "data structures and algorithms","algebraA"];
// console.log(...subject);
// let subjectCopy = [...subject];
// console.log(subjectCopy);

// //cau4
// console.log ("bai 4: clothes shop");
// let item = ['tobaco' , 'keo', 'katemin'];
// let choiceSystem = ['c', 'r', 'u', 'd'];
// while(true){
//     let userChoice = prompt("he, may muon cai lon gi???(c , r , u , d)");
//     if (userChoice == null){
//         alert ('cut nhanh ho bo may cai')
//         break;
//     }
//     if (userChoice == choiceSystem[1]){
//         console.log("bo may co nhung cai nay: ");
//         for(let i =0; i < item.length; i++){
//             console.log(i + 1 + ". " + item[i]);
//         }   
//      }else if ( userChoice == choiceSystem[0]){
//          let newItem = prompt ("nhap con me may vao day nhanh len");
//          item  = item.push(newItem);
//          alert('done');
//          console.log(item);
//      }else if( userChoice == choiceSystem[2]){
//          let positionItem = prompt('nhap vi tri m muon them vao day? \n 1.tobaco \n 2. keo \n 3.katemin');
//          let newName = prompt("them nhanh con me m len:");
//          item[positionItem] = newName;
//          alert('done');
//          console.log(item);
//      }else if (userChoice == choiceSystem[3]){
//          let positonDelete = prompt('nhap vi tri muon xoa vao day? \n 1. tobaco \n 2. keo \n 3.latemin');
//          item.splice(positonDelete,1);
//          alert('done');
//          console.log(item);
//      } else {alert("ngu vcl");}
// }

// //cau5
// console.log("bai 5:")
// let sequence = prompt('Enter a sequence of Numbers, separated by commas \(,\)');
// let Numbers = sequence.split(",");
// let sum = 0;
// for (let item of Numbers){
//     sum +=Number(item);
// }
// alert(`the sum of them is ${sum}`);

// //cau6
// console.log("bai 6: find the smallest number:");
// let n = prompt('enter a sequence of number sep by com');
// let num = n.split(',');
// let min = num[0];
// for(let i = 0; i< num.length; i++){
//     if( Number(min) > Number(num[i])){
//         min = num[i];
//     };
// };
// alert(`the smallest number is ${min}`);

// //cau7
// console.log('bai 7: search to look for the number in the array');
// const arr = [3,4,5,-9,10,-88,2];
// let userChoice = prompt("enter a number");
// let count = 0;
// let index = 0;
// for(let i =0 ; i<arr.length; i++){
//     if(userChoice == arr[i]){
//         count++;
//         index = i;
//     }
// }
//  if(count == 0){
//      alert(userChoice + 'is not found in array');
//  }else {
//      alert(userChoice + 'is found in array at index' + index);
//  }

// //cau 8
// console.log("bai 8:")
// let sheepSizes = [5,7,300,90,24,50,75];
// let index;
// console.log("iam fucking mad and here dog sheep sizes:");
// console.log(...sheepSizes);
// let max = sheepSizes[0];
// for(let i=0; i<sheepSizes.length; i++){
//     if (Number(max) < Number (sheepSizes[i])){
//         max = sheepSizes[i];
//     };
// };
// console.log("now my biggest sheep has size " +max + " , lets shave it");
// console.log('\n');
// let biggestSize = Math.max(...sheepSizes);
// console.log("now my biggest sheep has size" + biggestSize +" , lets shave it");
// console.log('\n');
// index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = 8;
// console.log(`after shearing , here is my flock:`);
// console.log(...sheepSizes);
// console.log('\n');
// for(let i=0; i<sheepSizes.length; i++){
//     sheepSizes[i] +=50;
// }
// console.log("month 1");
// console.log("one month has, passed, my sheeps has grown, here are there sizes");
// console.log(...sheepSizes);

// biggestSize = Math.max(...sheepSizes);
// console.log("now my biggest sheep has size" + biggestSize +" , lets shave it");
// console.log('\n');
// index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = 8;
// console.log(`after shearing , here is my flock:`);
// console.log(...sheepSizes);
// console.log('\n');
// for(let i=0; i<sheepSizes.length; i++){
//     sheepSizes[i] +=50;
// }

// console.log("month 2");
// console.log("one month has, passed, my sheeps has grown, here are there sizes");
// console.log(...sheepSizes);
// console.log('\n');
// index = sheepSizes.indexOf(biggestSize)
// sheepSizes[index] = 8;
// console.log(`After shearing, here is my flock: `);
// console.log(...sheepSizes);
// console.log('\n');
// for (let i= 0; i< sheepSizes.length; i++){
//     sheepSizes[i] += 50;
// }
// console.log('month 3');
// console.log("one month has , passsed, my sheeps has grown, here are there sizes ");
// console.log(...sheepSizes);
// console.log('\n');
// res =0;
// for (let i =0; i< sheepSizes.length; i++){
//     res += sheepSizes[i];
// };
// console.log(`my flock have total ${res}`);
// console.log(`i would get ${res} * 2$  = #{res *2}`);

// //bai 10 
// console.log("bai 10:")
// let names = prompt("enter a sequence of names");
// let changedname = names.split(',').map((name)=>{
//     return `<${name}>`;
// });
// alert(`${names} => ${changedname}`);

// // bai 11
// console.log('bai 11:');
// let Numbers = prompt ('enter a squence of numbers');
// let oddNumbers = Numbers.split(',').filter(num => num % 2 ==1);
// alert(`${Numbers} => ${oddNumbers} `);

/// Day la Obj 294-

// let person = ['viet', 19, 'hanoian'];
// console.log(person)
// let person = {
//     name: ' Viet',
//     age: 19,

// };
// console.log(person);
// let movie  = {
//     title: 'the dark night up',
//     year: 2012,
//     rates: 8.4,
// };
// console.log(movie.title);
// console.log(movie.year);
// console.log(movie.rates);

// console.log('1. read obj ways 1');

// console.log('title : ' +movie.title);
// console.log('year  : ' +movie.year);
// console.log('rates : '+movie.rates);

// console.log('2. read obj ways 2');
// for (let prop in movie){
//     console.log(`${prop} : ${movie[prop]}`);
// }

// console.log('vd2.2: ');
// let like = ['sport', 'girl', 'game',];

// like.push('movie');
// console.log(like);
// for(let i =0; i <like.length; i++){
//     if (i !=1)
//     console.log(like[i].toUpperCase());
// };

// console.log('vd3: ');

//  let movie = { 
//      title: 'attack on titans',
//      year: 2012,
//      rates: 8.4,
//  };
//  let check;
//  let x = prompt('muon xem cai lon gi o day??');
//  if ( x==null || x == undefined){
//      alert('cut con me may di!');
//  }else{
//      for(let item in movie){
//          if ( item == x){
//              alert(movie[item]);
//              break;
//          }else{
//              check = false;
//          }
//      }
//      if (check =false){
//          alert(`${x} does not exits in our data`)
//      }
//  }

//  movie['rates'] = 8.7
//  console.log(movie['rates']);
//  movie.rates += 0.5;
//  console.log(movie['rates']);

//  console.log('vd3.2:');

//  console.log('movie trc update : ');
//  console.log(movie);

//  let check;
//  let x = prompt('what u want to update: ');
//  if (x == null || x == undefined){
//      alert('goodbye!');
//  } else {
//      for (let item in movie){
//          if
//          ( item == x){
//              let y = prompt('what is the update : ');
//              movie[item] =y;
//              break;
//          } else{
//              check = false;
//          }
//      }
//      if (check = false){
//          alert(`${x} does not exist in our data `)
//      }
//  }
//  console.log('movie sau update : ');
//  console.log(movie);


// function createNewPerson(name){
//     const obj ={};
//     obj.name = name;
//     obj.greeting = function(){
//         alert('hi! I\'m ' +obj.name + '.');
//     };
//     return obj;
// }

// const viet = createNewPerson('Viet');
// viet.name;
// viet.greeting();

// function Person(name){
//     this.name = name;
//     this.greeting = function(){

//         alert('Hi! I\'m ' + this.name+'.');
//     };
// }

// let person1 = new Person ('bob');
// let person2 = new Person ('sara');

// person1.name
// person1.greeting()
// person2.name
// person2.greeting()

// let person1 = {
//     name: 'bob',
//     greeting: function(){
//         alert('hi! i\'m' +this.name + '.');
//     }
// }
// let person2 = {
//     name: 'sara',
//     greeting: function(){
//         alert('hi! i\'m' + this.name + '.');
//     }
// }

// function Person (first , last, age, gender, interests){
//     this.name = {
//         first : first,
//         last : last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function(){
//         alert(this.name.first+ ' '+ this.name.last + ' is' + this.age + ' years old. He likes' + this.interests[0]+ ' and' + this.interests[1]+' .');
//     };
//     this.greeting = function(){
//         alert('Hi! i\'m' + this.name.first + '.');
//     };
//     }

//     let person1 = new Person('bob', 'smith', 32,'male',['music', 'skiing']);
//     person1['age']
//     person1.interests[1]
//     person1.bio()
