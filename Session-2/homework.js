//  Câu 1:
{
console.log('Câu 1:')
console.log('1. What are var and const in JavaScript?');
console.log('Là 2 kiểu khai báo');
console.log('2. What are the differences between let and var?');
console.log('Let phạm vi hoạt động nhỏ hơn trong chính cặp ngoặc nhọn chứa nó');
console.log('Var phạm vi hoạt động rộng hơn vươt qua khỏi cặp ngoặc nhọn');
console.log('3.What are the differences between let and var?');
console.log('')
}

// Câu 2:
{
console.log('Câu 2:');
console.log('1. What is Boolean?');
console.log('Boolean là một trong những kiểu dữ liệu trong Java, nó chỉ cho phép biến mang 2 giá trị true (ĐÚNG) hoặc false (SAI)');
console.log('2. What results in Boolean?');
console.log('Kết quả trả về sẽ là true hoặc false, ngoài ra các biến chưa có giá trị, giá trị bằng 0 hoặc null cũng sẽ trả về false');
}

// Câu 3:
 console.log('Câu 3:');
 console.log('A:In ra 7 số, bắt đầu từ 0(người dùng ko can thiệp)');
{
for (let i = 0; i < 8; i++)
  {
        console.log(i)
   }
}
console.log('B:Số N, bắt đầu từ 0, N do người nhập ');
{
let x = prompt('Nhập vào một số'); 
for (let i = 0; i<x;i++)
  {
        console.log(i);
  }
}
console.log('C:Một dãy số, bắt đầu từ 3, kết thúc trước n, n do người dùng nhập');
{
 let x = prompt('Nhập vào một số'); 
for (let i = 3; i < x ; i++ )
  {
        console.log(i);
  }
}
console.log('D:Một dãy số, bắt đầu từ c, kết thúc trước n, c và n được nhập bởi người sử dụng');
{
let c = prompt('enter c'); 
let n = prompt('enter n');
for (let i = c;  i< n ; i++ )
  {
        console.log(i);
  }
}
console.log('E:Một dãy số, bắt đầu từ c, kết thúc trước n, bước nhảy là 3, n và c được nhập bởi người sử dụng');
{
let n = prompt('enter n'); 
let c = Number(prompt('enter c'));
for (let i = c; i < n; i +=3 )
  {
        console.log(i);
  }
}
console.log('F:Một dãy số, bắt đầu từ c, kết thúc trước n, bước nhảy là z, n và c và z được nhập bởi người dùng');
{
let n=prompt('enter n');
let c=Number(prompt('enter c'));
let z=Number(prompt('enter z'));
for (let i=c; i<n; i=i+z )
  {
        console.log(i);
  }
}
// Câu 4:
console.log("Câu 4:")
console.log("Viết chương trình tính giai thừa của n: (1 * 2 * 3 * ... * n), n do người dùng nhập")
{
  let x = prompt('enter x');
  let F =1;
  for(let i=1; i<= x; i++)
  {
    F *=i;
  }
  alert(`Giá trị giai thừa ${F}`);
}
// Câu 5:
console.log("Câu 5:");
console.log("Viết chương trình hỏi người dùng tuổi của họ, rồi quyết định số tuổi của họ( 14+)");
{
let x =prompt('Nhập vào số tuổi của bạn')
if(x<14)
{
    alert('Rất tiếc bạn không đủ độ tuổi')
}
else if(x>=14)
{
    alert('welcome!!')
}
}
// Câu 6:
console.log("Câu 6:");
console.log("Viết chương trình yêu cầu người dùng nhập một số, x, sau đó kiểm tra xem x ở nửa trên hay nửa dưới của 9(lower là phần nửa dưới, higher là phần nửa trên)");
{
let x =prompt('Nhập vào số x')
if(x<4.5)
{
    alert('lower half of 9')
}
else if(x>4.5)
{
    alert('higher half of 9')
}
}
//Câu 7:
console.log("Câu 7:");
console.log("Viết chương trình yêu cầu người dùng nhập hai số, x và n, sau đó kiểm tra xem x ở nửa trên hay nửa dưới của n ");
{
  let x =prompt(' Nhập vào x');
  let y =prompt(' Nhập vào y');
  if(x<y)
  {
    alert(`${x}is lower half of ${y}`);
  }
  else if (x>y)
  {
    alert(`${x}is higher half of ${y}`)
  }
}
//Câu 8:
console.log ("Câu 8:");
console.log (" Viết chương trình kiểm tra số chẵn lẻ")
{
  let x= prompt(' Nhập x ');
  if (x%2==0)
  {
    alert(`${x} là số chẵn`);
  }
  else 
  {
    alert(`${x} là số lẻ`);
  }
}
//Câu 9:
console.log("Câu 9:")
console.log("A. Tổng là 6 in ra phần nửa trên và phần nửa dưới ")
console.log("B.In ra n có phần nửa trên và phần nửa dưới")
// em nghĩ là làm bằng count nhưng mà em ko biết suy diễn ra kiểu gì ạ. Mai anh chữa nhé!!!!

console.log("C. Tổng là 8 và in ra 1 , 0")
{
  for (let i = 0; i<8 ; i++ )
     {
       if(i%2==0)
       {
       console.log(0);
       }
       else
       console.log(1);
     }
}
console.log("D. Nhập n và in ra n bằng 1, 0")
{
  let x = prompt('Nhập vào một số x'); 
   for (let i = 0; i<= x ; i++ )
     {
       if(i%2==0)
       {
       console.log(0);
       }
       else
       console.log(1);
     }
}
//Câu 10:
console.log("Câu 10:")
console.log("TÍnh chỉ sô BMI của một người qua công thức sau:")
{
  let weight =Number(prompt('enter weight'));
  let height =Number(prompt('enterheight'));
  let BMI = weight/(height*height)
  if(BMI<16)
  {
    console.log('severely underweight');
  } 
  else if(16<BMI<18.5)
  {
    console.log('underweight');
  }
  else if(18.5<BMI<25)
  {
    console.log('normal');
  }
  else if (25<BMI<30)
  {
    console.log('Obese');
  }
}
//Câu 11:
console.log("Câu 11:")
console.log("A: Vẽ hình vuông")
{
for (var i=1; i <= 4; i++) {
  fd(50)
  lt(90)
}
}
console.log("B: Vẽ hình tam giác")
{
  for (var i=1; i <= 3; i++) {
    fd(50)
    rt(120)
  }
}
console.log("C: Vẽ hình ngũ giác")
{
  for (var i=1; i <= 5; i++) {
    fd(103)
    rt(73)
  }
}
console.log("D: Vẽ hình lục giác")
{
  for (var i= 1; i<= 6; i++){
    fd(120)
    rt(60)
  }
}
//Câu 12:
console.log("Câu 12:")
console.log("Vẽ một đa giác, số cạnh của đa giác do người dùng nhập vào")
{
  let x = prompt (" enter number of edge:")
  for (let i=1; i<=x; i++)
  {
    fd(15);
    rt(360/x);
  }
}
//Câu 13:
console.log("Câu 13:")
console.log("Vẽ n đa giác theo n nhập từ người dùng")
{
  let x = prompt (" enter number of edge:")
  for (let i=1; i<=x; i++){
    for( let j= 1; j<= i +2; j++)
  {
    fd(100);
    rt(360/(i+2));
  }
}
}
