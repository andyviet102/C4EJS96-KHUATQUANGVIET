//init
let movies = ['broning', 'love,death and robot', 'teotfw'];
console.log(movies);
//create
let movies = ['broning', 'love,death and robot', 'teotfw'];
console.log(movies);
 let newItem = prompt(`enter new item`);
 movies.push(newItem);
 console.log(movies);
 //read
 let movies = ['broning', 'love,death and robot', 'teotfw'];
let i = prompt('nhap phim muon xuat hien');
console.log(movies[i]);
//read 1:
let movies = ['broning', 'love,death and robot', 'teotfw'];
let i = prompt('nhap ten tit le moi vao day');
movies [0] = i ;
console.log (movies[i]);
console.log (movies);
//read 2:
let movies = ['broning', 'love,death and robot', 'teotfw'];
let i = prompt(' nhap vi tri muon doi vao day');
let x = prompt ('nhap ten tit le muon doi vao day');
movies [i] = x;
console.log(movies);
//update 1:
let movies = ['broning', 'love,death and robot', 'teotfw'];
let title = prompt("nhap ten phim");
movies[0] = title;
console.log(movies);
//update 2:
let movies = ['broning', 'love,death and robot', 'teotfw']
let title = prompt("nhap ten phim");
let i = prompt('vi tri muon doi');
movies[i]= menutitle;
console.log(movies);
//del 1
let movies = ['broning', 'love,death and robot', 'teotfw']
let x = prompt ('vi tri muon xoa');
movies.splice(x , 1);
console.log(movies);
//del 2
let movies = ['broning', 'love,death and robot', 'teotfw'];
let x = prompt ('vi tri muon xoa');
let y = prompt (' so luong muon xoa');
movies.splice(x , y);
console.log(movies);
//for vd1;
let movies = ['broning', 'love,death and robot', 'teotfw'];
for( let i=0; i<movies.length; i++)
{console.log(movies[i])}
//for vd2;
let movies = ['broning', 'love,death and robot', 'teotfw'];
for( let i=0; i<movies.length/2; i++)
{console.log(movies[i])}
//foe vd3;
let movies = ['broning', 'love,death and robot', 'teotfw'];
for(let i=0; i <movies.length;i++)
{
  console.log((i+1)+'-'+ movies [i])
}
//update
let movies = ['broning', 'love,death and robot', 'teotfw'];
for(let i=0; i <movies.length;i++)
{
 movies[i] = movies[i].toUpperCase();}
console.log(movies);
//while username ex
  while(true)
  {
      let n= prompt('nhap ten m vao day');
      let x=n.length;
      if (x>15)
      {
          alert('ten lon gi ma dai the nay')

      }
      else{
          alert(' ok duoc roi')
        break;
        }
  }
//while choice legs of spider
{
    while (true){
      let x= Number(prompt('Enter your answer \n\
      1. None\n\
      2. 4legs\n\
      3. 8legs\n\
      4.12legs'));
      if(x==1){
        alert('good luck next time')
      }
      else if (x==2)
        {
          alert('good luck next time')
          break;
        }
    else if (x==3)
      {
        alert('bravo')
        break
      }
    else if(x==4)
      {
        alert('good luck next time')
      }
    }
  }
  
  
  
  