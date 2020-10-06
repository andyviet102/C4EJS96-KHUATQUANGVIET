//Câu 1:
// console.log('Câu 1:');
// console.log('1-->D');
// console.log('2-->A');
// console.log('3-->C');
// console.log('4-->B');
//Câu 2:
// console.log('Câu 2;');
// setInterval(function(){ console.log("Hello"); }, 3000);
//Câu 3:
// console.log('3.1: Không ạ');
// console.log('3.2: Không ạ');
//Câu 4:
// console.log('Câu 4:')
//    var li = document.getElementsByTagName('li');
//    console.log(li[0]);
//    for( let i= 0; i<li.length; i++){
//        console.log(li[i]);
//    }
//Câu 5:
// console.log('Câu 5:')
// const div = document.getElementsByClassName('singer');
// console.log(div[1]);
// for (let i=0; i< div.length; i++){
//     console.log(div[i]);
// };
//Câu 6:
//console.log('Câu 6:')
// document.getElementsByClassName('thich xoa cai gi thi cho vao day')[vi tri nao thi dien vao day].remove();
//Câu 7:
//console.log('Câu 7:')
// var btn_1 = document.getElementById("button1");
// btn_1.addEventListener("click", (e) => {
//     alert(e.target);
// });
// console.log('e.target returns the element that triggered the event');

// var ip = document.getElementById("input");
// ip.addEventListener("keydown", (e) => {
//     alert(e.key);
// });
// console.log('e.key returns the keyword of the pressed keyboard key');
//Câu 8:
console.log('Câu 8:')
function wish (){
    alert('Tôi là khuatviettramtinh tôi ước tôi pass cả 3 khóa mindx');
};
wish();
//Câu 9:
//console.log('Câu 9:');
// function sayW(name, comment) {

//     alert('Hi' + name);
    
//     alert(`${name},wish  ${comment}`);
    
//     }
//     let x=prompt('enter your name')
//     let y=prompt('enter your wish')
//     sayW(x, y);
//Câu 10:
// console.log('Câu 10:')
// let userName = prompt(`Please enter your name`);
// let userWish = prompt(`Please enter your wish this year`);

// function showUserNameAndWish(name, wish) {
//     if (wish == undefined || wish == null || wish == ``) {
//         alert(`Hello, you are just ${name}`);
//     } else {
//         alert(`Hello, you are ${name}
//         your wish this year is ${wish}`);
//     }
// }

// function eventClick(event) {
//     console.log(event.name);
//     showUserNameAndWish(userName, userWish);
// }
// let btns = document.getElementsByClassName(`show`);
// btns[0].addEventListener(`click`, eventClick);
// Bài 11
// 11.2
// const d=document.getElementById('upper_btn')
// console.log(d)
// 11.3
// const d=document.getElementById('upper_btn')
// function clickUpperit(){
//   console.log(d)
// }
// d.addEventListener('click',clickUpperit);
// 11.4
// const d=document.getElementById('upper_btn')
// const b=document.getElementById('name_input')
// function clickUpperit(){
//   console.log(d)
// }
// d.addEventListener('click',clickUpperit);
// console.log(b)
// 11.5
// const d=document.getElementById('upper_btn')
// const b=document.getElementById('name_input')
// function clickUpperit(){
//   console.log(b.value)
// }
// d.addEventListener('click',clickUpperit);
//11.6
// const d=document.getElementById('upper_btn')
// const b=document.getElementById('name_input')
// function clickUpperit(){
//   console.log(b.value.toUpperCase());
// }
// d.addEventListener('click',clickUpperit);
// 11.7
// const d=document.getElementById('upper_btn')
// const b=document.getElementById('name_input')
// const r=document.getElementById('result_div')
// function clickUpperit(){
//   console.log(b.value.toUpperCase());
// }
// d.addEventListener('click',clickUpperit);
// console.log(r)
// 11.8
// const d=document.getElementById('upper_btn')
// const b=document.getElementById('name_input')
// const r=document.getElementById('result_div')
// function clickUpperit(){
//   r.textContent=b.value.toUpperCase()
// }
// d.addEventListener('click',clickUpperit);
//12.1
// const items = [
//     `Backpack`, `MiBand watch`, `Ring`
// ]
12.2+3
const items = [
    `Backpack`, `MiBand watch`, `Ring`
]
// console.log(items)
// const a=document.getElementById('List_u')
// console.log(a)
// 12.4+5
// const b=document.getElementsByTagName('li')
// console.log(b)

// 12.6 -> 12.11
//console.log(items)
// const a=document.getElementById('List_u')
//console.log(a)
// const b=document.getElementsByTagName('li')
//console.log(b)

// const c=document.getElementById('add_btn')
// const d=document.getElementById('item_input')
// c.addEventListener('click',addbutton)
// function addbutton(){
  //console.log(c)
//   console.log(d.value)
//   items.push(d.value)
//   console.log(items)
//   a.insertAdjacentHTML('beforeend',`<li><span>${d.value}</span></li>`)
//   document.getElementById('item_input').value = "";
// }
// 12.12->12.14
//console.log(items)
// const a=document.getElementById('List_u');
//console.log(a)
// const b=document.getElementsByTagName('li');
//console.log(b)
// const e=document.getElementsByClassName("remove_btn");
// console.log(e)
// const c=document.getElementById('add_btn');
// const d=document.getElementById('item_input');
// c.addEventListener('click',addbutton)
// function addbutton(){
  //console.log(c)
//   console.log(d.value)
//   items.push(d.value)
//   console.log(items)
//   a.insertAdjacentHTML('beforeend',`<li><span>${d.value}</span></li>`)
//   document.getElementById('item_input').value = "";
// }

// for(let i = 0; i < e.length; i++){
//     e[i].addEventListener("click", () => {
//         console.log('Index ' + i);
//         items.splice(i, 1);
//         console.log(items);
//     })
// }

//12.14->12.16 tham khảo code trên group và của các bạn
// var items = ['Backpack', 'MiBand watch', 'Ring'];
// var list = document.getElementById("item_list_ul");
// var newItem = document.getElementById("item_input");
// var addBtn = document.getElementById("add_btn");

// function reloadList() {
//     list.innerHTML = '';
//     for (let i = 0; i < items.length; i++) {
//         list.insertAdjacentHTML("beforeend", '<li><span>' + items[i] + '</span><button class="remove_btn">Remove</button></li>');
//     };

//     //Add actionListener for Remove button
//     let rmvBtn = document.getElementsByClassName('remove_btn');
//     for (let i = 0; i < rmvBtn.length; i++) {
//         rmvBtn[i].addEventListener("click", (e) => {
//             items.splice(i, 1);
//             console.log(items);
//             reloadList();
//         });
//     };
// }

// reloadList();

//Add actionListener for Add button
// addBtn.addEventListener("click", (e) => {
//     var valueInput = document.getElementById("item_input").value;
//     items.push(valueInput);
//     reloadList();
//     document.getElementById("item_input").value = "";
//     console.log(items);
// });
