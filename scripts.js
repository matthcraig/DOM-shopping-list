var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength(){
  return input.value.length;
}
function createListElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  var btn = document.createElement("button");
  btn.appendChild(document.createTextNode("Delete"));
  li.appendChild(btn);
  btn.onclick = removeParent;
  listItems();
}
function removeParent(event){
  event.target.parentNode.remove();
}

function addListAfterClick(){
    if (inputLength() > 0){
      createListElement()
    }
  }

function addListAfterKeypress(event){
  if (inputLength() > 0 && event.keyCode === 13){
    createListElement()
  }
}
function listItems(){
  for (i=0; i<li.length; i++){
    li[i].addEventListener('click', changeClass)
  }
}
function changeClass(){
  this.classList.toggle("clicked");
}
button.addEventListener("click", createListElement);

input.addEventListener("keypress", addListAfterKeypress);