console.log(window.document.body);
console.log(document.body);

// Selectors in DOM  - Most commonly used selctors
console.log(document.querySelector("div"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelector(".first-div-child"));
console.log(document.querySelector("#second-div"));
console.log(document.querySelector("div.first-div"));
console.log(document.querySelector("div#second-div"));

//Other specific selectors
//select element by class
console.log(document.getElementsByClassName("first-div-child"));
console.log(document.getElementById("second-div"))

const  para = document.querySelector("p");
console.log(para);
para.style.color = "blue";
para.style.backgroundColor = "yellow";



//setting, editing and deleating an attribute value
const imageElement = document.querySelector("img");
//updating the value of existing attribute
imageElement.setAttribute("src", "real7.jpeg");
//creating a new data-attribute
// const setPrice = document.querySelector("p.price");
// setPrice.setAttribute("data-value", "40"); 


console.log(para.innerHTML);
// console.log(para.textContent);

//  para = document.getElementById("para");
// para.innerHTML = "<strong>" + para.innerHTML + "</strong>";
// console.log(para.innerHTML);

//H.W write the differnace between innerHtml & textContext

const sectionElement = document.querySelector(".class1");
const newSectionElement = sectionElement.className.split(' ');
newSectionElement.splice(2,1);
console.log(newSectionElement);


// classList

const sectionElementCopy = document.querySelector(".class1");
console.log(sectionElementCopy.classList);

//add
//remove
//replace 
//toggle
//contains
   
// H.w differnace between classlist and className

