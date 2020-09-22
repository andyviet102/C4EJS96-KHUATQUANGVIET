
// Câu 1:
let a = 'pop';
let b = 'rap';
//a.
{
[a,b]=[b,a]
console.log(a, b);
}
//b.
{
let x = a;
a = b;
b = x ;
console.log(a,b);
}
// Câu 2:
{
let x="Code very good";
let s=x.split(" ");
console.log(s);
}
// Câu 3:
{
let  a = [4, 5, 7, -8];
console.log(...a);
}
// Câu 4:
{
let shop =["Jeans", "T-Shirt", "Socks"];
while(true)

{
    let x= prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D)");

    if(a=="r")
{
    for(let i=0;i<shop.length;i++)
        {
            console.log((i+1)+"."+shop[i]);
        }
    
}
else if(a=="c")
{
    let y=prompt("Enter the name of the new item");
        shop.push(x);
        alert("Done")
        console.log(shop)
        
}
else if(a=="u")
{
    let z=prompt("Enter the posititon you want to update");
        let u=prompt("Enter the new name: ");
        shop[m]=u;
        alert("Done")
        console.log(shop)
        
}
else if(a=="d")
{
    let w=prompt("Enter the posititon you want to delete");
        shop.splice(o,1);
        alert("Done")
        console.log(shop)
        
}
else alert("no")
if (a==null)
{
    alert("goodbye!")
    break;
}
}
}
// Câu 5:
{
let x= prompt('Nhap so vao day')
let array= x.split(',');
array = array.map(array => Number(array))
let sum = array.reduce(function (accumulator, currentValue)
{ 
    return accumulator + currentValue 
},0)
alert(sum)
}
// Câu 6:
{
let x=prompt (' Nhap vao day day so')
let array = x.split(',');
let maxnumber = Math.max.apply(Math,array);
alert("gia tri lon nhat la "+maxnumber);
}
// Câu 7:
{
let x=prompt('enter a number')
let number = ['10','20','30','40'];
let n = number.includes(x);
let i = number.indexOf(x);
if(n== true)
{
    alert(" IN my array at index "+i)
}
else if(n==false)
{
    alert(' Not in my array')
}
}
// Câu 8: tham khao cua ban viet

//8.1
{
let Array=["60","190","320","20","45"]
let x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
}
//8.2
{
let Array=["60","190","320","20","45"]
let x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
let maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
}
//8.3
{
let Array=["60","190","320","20","45"]
let x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
let maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+" let shave it");
let i = Array.indexOf( maxInNumbers);
console.log('After shearing,here is my flock')
Array[i]=8
console.log(Array)
}
//8.4
{
let Array=["60","190","320","20","45"]
let x = Array.toString();
console.log('hello my name is viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
let maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
let i = Array.indexOf( maxInNumbers);
Array[i]=8
console.log(Array)
for(t=0;t<Array.length;t++)
{
    Array[t]=Array[t]+50;
}
console.log("MONTH 1")
console.log("One month has, passed, my sheeps have grown, here are their sizes")
console.log(Array);
}
//8.5 
{
let Array=["60","190","320","20","45"]
var x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
let i = Array.indexOf( maxInNumbers);
Array[i]=8
console.log(Array)
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log( '1 Month');
console.log('one month has passed and my sheep have grown');
console.log(Array)
console.log('3 Month');
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log('three month has passed and my sheep have grown');
console.log(Array)
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");

}
// 8.6
{let Array=["60","190","320","20","45"]
var x = Array.toString();
console.log('hello my name is Viet and here is my sheep size')
console.log(x)
Array = Array.map(Array => Number(Array))
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size"+maxInNumbers+"let shave it");
let i = Array.indexOf( maxInNumbers);
Array[i]=8
console.log(Array)
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log( '1 Month');
console.log('one month has passed and my sheep have grown');
console.log(Array)
console.log('3 Month');
for(let t=0;t<Array.length;t++)
  {
    Array[t]=Array[t]+50;
  }
console.log('three month has passed and my sheep have grown');
console.log(Array)
var maxInNumbers = Math.max.apply(Math, Array);
console.log(" Now my biggest sheep has size "+maxInNumbers+" let shave it");
let sum=0
for(let t=0;t<Array.length;t++)
  {
    sum+=Array[t];
  }
console.log("my flock has size in total "+sum)
let money=sum*2
console.log("i would get  "+ sum+"*2$ ="+money)
}

// Câu 9
 {function Polygon(){
   const  colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
       for (let i=0; i<colors.length; i++){
      for( let j= 1; j<=4; j++)
    {
      color(colors[i])
      fd(30*i);
      rt(90);
    }
  }
  }
  Polygon();
 }
// Câu 10
{
var Array=prompt("Enter a squence of Name");
var sum = Array.split(",");
var sum1 = sum.map(x => "<"+x+">");
alert(`${sum}"=>" ${sum1} `)
}

//bài 11
{
let n =prompt('Nhap vao day so cần lọc');
let array = n.split(",");
const result = array.filter(x => x%2 !== 0);
alert(n+'=>'+result )
}
