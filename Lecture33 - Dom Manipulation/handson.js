// Accessing Elements
let p = document.getElementById("para");
console.log(p.innerText);

// Changing Style (CSS)
function changeStyle(){
    let p = document.getElementById("para");
    p.style.color = "red";
    p.style.fontSize = "24px";
  }

//   Changing Text and HTML
function changeText(){
    let p = document.getElementById("para");
    p.innerText = "Welcome to JavaScript!";
  }

//   Creating and Adding Elements
  function addElement(){
    let newP = document.createElement("p");
    newP.textContent = "New paragraph added!";
    document.getElementById("container").appendChild(newP);
}

// Removing Elements
function removePara(){
    let p = document.getElementById("para");
    p.remove();
}


// Changing the href and title attribute of a link
// HTML
function changeLink() {
    let link = document.getElementById("myLink");
    link.setAttribute("href", "https://www.wikipedia.org");
    link.setAttribute("title", "Wikipedia");
    link.innerText = "Visit Wikipedia";
  }