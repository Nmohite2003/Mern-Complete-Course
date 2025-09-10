console.log("Nilesh");
//AIS -> automatic inseration

/* const a = 5;
if(true) 
clg(hi);
// a+=5; -> constant unit of time to execute */ 


//time and space complexity is approximation based only not eaxcat amount of time

// o(N) is equaivalent to o(k.N) => k =>constant
//K is not dependent on N

/*
 O(1) -> constant
 O(N) -> Linear
 O(N*N) -> Qudratic
 O(logN) -> Logarithmeic 
 
 let m = 1;
 while (m<n){
    m*=2;  -> O(log base 2 N);
 }

 for(let i=0;i<N;i++){
    while(N>0){
        N/=2;
    }
 } -> time complexity -> O(log N) 

 for logical AND(&&) -> in short ciruting first  falsy value OR last truthly value will be the output

 * for Logical OR (||) -> first truthly OR last falsy
 
 */
// const arr = [];
// let n =100;
// let key = 56;
// for(let i=1;i<=n;i++){
//     arr.push(i);
   
//     }
    
// for(let i=0;i<100;i++){
//     if(arr[i] == 56){
//         console.log(i);
//     }
// }

  const arr = [1,2,4,4,6,6,6,8];
 
  let N = arr.length;

  let firstIndexOf6 = -1;
  let lastIndexOf6 =-1;

  for(let i=0;i<N;i++){
    if(arr[i] === 6){
        if(firstIndexOf6 == -1){
            firstIndexOf6 =i;
        }
        lastIndexOf6 = i;
    }
  }
  console.log(firstIndexOf6,lastIndexOf6);
