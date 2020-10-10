console.log('Câu 5:');
function X(a, b){
    return Math.floor(Math.random()*(b -a)+a)
};
const y = X(4, 16);
console.log (y);
if (y < 4){ console.log('Failed: the number is smaller than 0');}
else if (y > 16){ console.log('Failed: the number is bigger than 10');}
else{ console.log('Passed, bravo');}