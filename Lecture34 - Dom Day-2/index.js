const h3Element = document.createElement('h3');

h3Element.textContent = 'Hi,Im a h3 Element';

const div = document.querySelector('div');
div.appendChild(h3Element);

// const para = document.querySelector('p');
// para.addEventListener('click', (event)=>{
//     paraClicked(event);
// });

// function paraClicked(event){
//     console.log("Hi, I'm a Prateek",event.type);
// }

//mousehover
//mouseup
//mousedown
//keyup

// const para = document.querySelector('p');
// para.addEventListener('mousedown', (event)=>{
//     paraClick(event);
// });

// function paraClick(event){
//     console.log("Hi, I'm a Prateek",event.type);
// }
const heading = document.querySelector('h1');
heading.addEventListener('mouseover', () => {
  changeStyle();
});

function changeStyle() {
  heading.style.color = "red";
  heading.style.fontSize = "24px";
  
}

const para = document.querySelector('p');
para.addEventListener('mousedown', () => {
  changesStyle();
});

function changesStyle() {
  para.style.color = "yellow";
  para.style.fontSize = "24px";
  
}

