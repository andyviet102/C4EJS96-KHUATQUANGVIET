console.log('Câu 6:');
function distancefAtB(x1,y1,x2,y2){
    let a = Math.pow((x1 - x2),2);
    let b = Math.pow((y1 -y2), 2);
    return Math.sqrt(a + b)
}
const d = distancefAtB(3,10,0,6);
if (x!== 5){ console.log('Failed: the calculation is wrong');}
else{ console.log('Passed, bravo');}