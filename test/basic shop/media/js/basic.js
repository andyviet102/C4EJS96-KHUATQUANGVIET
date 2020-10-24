let showNike = document.getElementById('nike');
let showList= document.getElementById("showList");
let search_Text = document.getElementById("search");
let search_btn = document.getElementById("search-btn");
let x = document.getElementsByClassName("silderItems");
let btn_right = document.getElementById("plusDivs");
//chuyển đọng trái phải silder show
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex +=n );
 }
plusDivs.addEventListener('click',()=>{
  var i;
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    // console.log(x[i])
  }
    x[slideIndex-1].style.display = "block";  
} function showDivs(n)
})

//show sp ra html
function soProduct(img, name, description, price)
{
    showList.insertAdjacentHTML('beforeEnd', 
    `
    <div class="productItem">
      <div class="productImg"><img src="${img}" alt="" style = "display :flex"></div>
      <div class="productTit">
        <b>${name}</b> <br>
        <span>${description}</span>
      </div>
      <div class="productPrice">${price}</div>
      <button class="addPro">Add to cart</button>
     </div>
    `
    )
}

function searchResult (name){
  filter-ul.insertAdjacentElement('beforeEnd',
  `
    <div>
      <ul id="filter-ul">
        <li class="filter">${name}</li>
      </ul>
    </div>
    `
  )
}
// show sản phẩm ra từ đầu
// showList.innerHTML = '';
// for(let i=0; i< products.length; i++)
// {
//     soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
// }

// tìm kiếm theo brand
showNike.addEventListener('click',()=>{
  showList.innerHTML = '';
  for(let i = 0 ; i < products.length ; i++){
    if(products[i].brand == 'Nike'){
      soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
      
    }
  }
})
// tìm kiếm theo tên
function getInputValue(){
  // Selecting the input element and get its value 
  showList.innerHTML ='';
  var inputVal = search_Text.value.toLowerCase();
  for(let i = 0 ; i < products.length ;i++){
    let x = products[i].name.toLowerCase()
      if(x == inputVal){
        soProduct(products[i].img[0], products[i].name, products[i].description, products[i].price);
        searchResult(products[i].name);
    }
  }
}
 // tìm kiếm search live
function liveSearch(){
  let fillterUl = document.getElementById('filter-ul');
  fillterUl.innerHTML = "  ";
  if (search_Text.value.length > 0) {
    for(let i =0; i<products.length ; i++){
      a = products[i].name;
      if(a.toUpperCase().indexOf((search_Text.value.toUpperCase())) > -1){
        fillterUl.innerHTML += `<li style = "display : block; ">${a}</li>`
      }
      else {
        fillterUl.innerHTML += `<li style = "display : none; ">${a}</li>`
      }
    }
  }
}
// sắp xếp theo giá 



