console.log("Nilesh Mohite");

//Creation of objects

 const studentObj = {
    name: "Nilesh Mohite",
    age: 17,
    address: "Pune",
    standard: 12
 }



/* create variables to store name,age,address of parent */

const parentName = "Riya";
const parentAge = 35;
const parentAddress = "pune";


const parentObj = {
    name: "Riya",
    age: 35,
    address : "pune"
}

//Access propertise of objects

console.log("Student's name:",studentObj.name);
console.log("Student's name:",studentObj["name"]);


//updating a value of an object
studentObj.name = "Rohit";
studentObj.age = 45;
console.log("Student's name:",studentObj.name);
console.log("Student's age:",studentObj.age);

// add any property of an object

parentObj.gender = "Female";
parentObj.standard = 12;
console.log(parentObj);

//delete any property from object
delete parentObj.standard;
console.log(parentObj);


//task
// create a person object name,age,city  for this object add hobby and update city nagpur {raj,18,pune} print the age of this person

const personObj = {
    name:"Raj",
    age:18,
    city:"pune"
}
console.log(personObj);

//add  hobby of the person
personObj.hobby = "cricket";
console.log(personObj);

//update the city 
parentObj.city = "nagpur";
console.log(personObj);

//print the age of person
console.log("age of person :", personObj["age"]);


//Nested objects

const employeeObj = {
    name:"Raju",
    company:"Acciojob",
    salary: "10Lpa",
    address: {
        addressLine1:"Bhumkar Chowk",
        addressLine2:"wakad",
        houseNumber:31,
        city:"Pune"
    }
}
console.log("City of",employeeObj.name , "is", employeeObj.address.city);

//Array of objects

const studentObjArr = [
    studentObj,{
        name:"Abhi",
        age:27,
        address: "Mumbai",
        standard:9

    }
];
console.log(studentObjArr);

for(let i in studentObj){
    console.log(i,":",studentObj[i]);
}

for(let i in Object.keys(studentObj)){
    // console.log(i,":",studentObj[i]);
}
console.log("Values",Object.values(studentObj));



//task 2
// create a classroom array of 4 students each student will have : name age gender grade address addressLine1 addressline2 city houseNumber
// print the name age and house no of all students residing in pune
const classroomObjArr = [
    {
      name: "Nilesh Mohite",
      age: 21,
      gender: "Male",
      grade: "A",
      address: {
        addressLine1: "Shivaji Nagar",
        addressLine2: "Near Post Office",
        city: "Pune",
        houseNumber: "101"
      }
    },
    {
      name: "Priya Sharma",
      age: 20,
      gender: "Female",
      grade: "B+",
      address: {
        addressLine1: "MG Road",
        addressLine2: "Opposite Mall",
        city: "Mumbai",
        houseNumber: "202"
      }
    },
    {
      name: "Rohit Verma",
      age: 22,
      gender: "Male",
      grade: "A+",
      address: {
        addressLine1: "Civil Lines",
        addressLine2: "Near Railway Station",
        city: "pune",
        houseNumber: "303"
      }
    },
    {
      name: "Sneha Patil",
      age: 19,
      gender: "Female",
      grade: "B",
      address: {
        addressLine1: "Kothrud",
        addressLine2: "Behind Temple",
        city: "Pune",
        houseNumber: "404"
      }
    }
  ];
  
  console.log(classroomObjArr);
  
  
  // Print name, age, and house number of students from Pune
  for (let i in classroomObjArr) {
    let student = classroomObjArr[i];
    if (  student && student.address && student.address.city === "Pune") {
      console.log('Name:', student.name, 'Age:', student.age, 'House No:', student.address.houseNumber);
    }
  }
  
  // this keyword in objects

  //each Object has its own this keyword
  // mostly used 

  //function inside object

  const carObj = {
    car: "Mercedes GLS",
    color: "white",
    mileage: 10,
    currentSpeed: 20,
     running: function running(){
    console.log("The car is running!! ");
    }
  }
  carObj.running();


  //this keyword in objects 
  const carObj1 = {
    car: "Mercedes GLS",
    color: "white",
    mileage: 10,
    currentSpeed: 20,
     running: function running(){
    console.log("The car is running!! Current speed is:",this.currentSpeed);
    }
  }
  carObj.running();


  //task 3

  // obj -> name -> piyush skills->Array ->[]

  const PortfolioObj = {
    name: "Piyush",
    skills: ["c++", "javascript", "Mern"],
  
    showSkills: function () {
      console.log("Skills of piyush:", this.skills.join(", "));
    }
  };
  
  PortfolioObj.showSkills();


  
  
