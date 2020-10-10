console.log('Câu 4:');
function X(){
    return Math.floor(Math.random()*11)
};
const y = X();
console.log(y);
if(y < 0){
    console.log('Failed: the number is samller than 0');
}else if(x>10){
    console.log('Failed: the number is bigger than 10');
}else {
    console.log('Passed, bravo');
}
