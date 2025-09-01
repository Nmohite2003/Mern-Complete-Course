console.log("Nilesh");

const obj ={
    property1:"Property one",
    property2:"Property two"
}
console.log(obj["property3"]);


//STRING

let str = 'a';
console.log(typeof str);

//case when we must use single codes

str = 'Hi must do " Java " classes';
console.log(str);

//case when we must use double codes
str = `Hi i am nilesh and you must do " Javascript " classes`;
console.log(str);


//some more  features of back ticks

let personName = "Nilesh";
str = `Hi i am ${personName} and you must take "javascript" classes`
console.log(str);


// Some methods in String

  str = "we are going to see, some methods of strings";

//includes function -> returns if the given string is present in str or not
console.log(str.includes('z'));

//replace function -> replaces only the first occurance of 'w'
console.log(str.replace("w","x"));
console.log({str});//repace() doesnt changes the original string

//replaceAll function replace all "w" with "x"
console.log(str.replaceAll("w","x"));
console.log({str});

//trim() -> removes all leading and tralling spaces
console.log(str);
console.log(str.trim());
console.log({str});

//substring() -> gives substring -> doesnt changes the original starting
console.log(str.substring(3,9));//gives substring starting  from 3 and ending at 8 (9-1);
console.log(str.substring(3));//gives substring starting from 3 till end
console.log(str.substring("3"));//gives substring starting from 3 till end
console.log(str.substring(-3));//gives substring starting from  till end
console.log(str.substring(-3,-10));//gives empty string -> (0,0)
console.log(str.substring(-3,10000));// behaves as (0,n)


//SLICE() -> almost same as substring, but changes (-)ve  differently

console.log(str.slice(3));//(3,n)
console.log(str.slice(3,5));// gives elements from index = 3 to 4
console.log(str.slice(-3));//gives last 3 elements
console.log(str.slice());//
console.log(str.slice(-100));// gives all elements in case the number is greater than the length of string 
console.log(str.slice(-3,0))//give empty string as end is smaller than start

//split()-> splits the string based on given character
console.log(str.split(","));

const line = "Hello welcome to MERN stack course  ";

console.log(line.split(" "));

//toUpperCase()

console.log("hello".toUpperCase());


/* ======== Wrapper objects ========== */

const string = "Nilesh";
const number = 67;
const bool = true;
const object = {
    name:"Nilesh"
};
console.log(string.__proto__);
console.log(number.__proto__);
console.log(bool.__proto__);
console.log(object.__proto__);


/* Spread & Rest operator */

//Rest operator -> ... -> combines all the arguments and transfrom them into an array
// function addStudent (students,studentName){
//     students.push(studentName);
//     console.log({students});
// }
// const students = ["Rahul","Nilesh","Riya"];
// addStudent(students,"Patil");
// addStudent(students,"prateek");
// addStudent(students,"Nivas");
// addStudent(students,"Abhishek");


function addStudent (students, ...studentNames){
    console.log(studentNames);
    for(let student of studentNames);
    students.push(student)
    console.log({students});
}
const students = ["Rahul","Nilesh","Riya"];
addStudent(students,"Patil");


// use spread operators with objects


