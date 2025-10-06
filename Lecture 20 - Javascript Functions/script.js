console.log("Nilesh");

/* ==========Functions=========== */

// const arrow = (a,b) => {return a-b};
// console.log(5,2);

// write a arrow function to check number is divisible by 3 or not

const isDivisible = (a) => {
    if(a % 3 == 0) {
        return true;
    }
    else{
        return false
    }
}
console.log(isDivisible(10));

//using single statement

const divisible = (num) => !(num % 3);
console.log(divisible(9));

/* arrow functions do not their own this keyword , they uses parent 'this' */

const student  = {
    fullName: "Nilesh Mohite",
    age: 23,
    result1: function(resultStatus) {
        console.log(this.fullName + "Has" + resultStatus + "The Exam");
        console.log(this);
    },
    result2: function(resultStatus)  {
        console.log(this.fullName + "Has" + resultStatus + "The Exam");
        console.log(this)
    }
};
student.result1();

// types of ForEach



let arr =[2,1,6,3,4];

arr.forEach((value,index,array) =>{
      value *= 2;
      array[index] = value;
      console.log(value,index,array);
})
console.log(arr);


let users = [
    {name: "Nilesh", age: 20},
    {name: "Abhi", age: 23},
    {name: "Pratik", age: 22}

];
users.forEach((value) => {
    console.log("Name:",value.name, ", Age:", value.age)
});



/* 1. map()
    - transfroms the array
    - returns an array 

    */

    let arr1 = [3,2,9,0,10];
    let squared = arr1.map((value,index,array) => {
      return value * value;
    })
    console.log({squared})

    /*  transfrom the name of each user to uppercase */
    // let arr2 = [Nilesh,Mohite];
    let uppercase = users.map((value,index,array) => {
       return { Name:value.name.toUpperCase(),  Age: value.age};
    })
    console.log({uppercase})


    /* filter()
    */

    let nums = [2,12,9,18,27];
   const even = nums.filter((value,index,array) => !(value % 2) );
         console.log({even})

let names = ["Nilesh", "Abhi", "Mohite"];

// filter above "names" in a way 

const lessthan5 = names.filter((value) => value.length > 5)
console.log({lessthan5});