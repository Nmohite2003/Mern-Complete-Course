console.log("Nilesh");

// write a recursive function to find the sum of first N naturals numbers

let N = 10;

function sumOfNaturalNo(N){
    if(N==1) return 1;
    return N+(sumOfNaturalNo(N-1));
    }
console.log(sumOfNaturalNo(N));

// Recursive function to print the GCD of  two numbers


let a = 15 , b = 25;

function greatestCommon(a,b){
     while(a!=0){
        let temp =a;
        a=b%a;
        b=temp;
       
       }
       return b;
    }
console.log(greatestCommon(a,b));

 a = 5;
 b = 15;

function gcd(a,b){
    if(a == 0 ) return b;
    
    return gcd(b%a,a);
}
console.log(gcd(a,b));

// gcd of an array

let arr = [27,12,18,24,30];
let gcdArr = 0;

for(let i=0;i<arr.length;i++){
    gcdArr = gcd(gcdArr,arr[i]);
}
console.log(gcdArr);

// home work Nth fibonacci number using recursion


//Binary exponetial

//write a function the power  o A rasised B
let x = 5,y = 15;
function power(x,y){
       let result =1;
       for(let i=0;i<y;i++){
        result *=x;
       }
       return result;
}
console.log(power(x,y));


function findPower(x,y){
    if(y==1) return x;
    return x*findPower(x,y-1);
}
console.log(findPower(x,y));

 
function binaryExponentitation(x,y){
    if(y==0) return 1;
    if(y==1) return x;

    let temp = binaryExponentitation(x, Math.floor(y/2));
    return temp*temp*x ** (y%2);
}
console.log(binaryExponentitation(x,y));




