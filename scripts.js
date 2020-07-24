var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll('li');
for(var i=0; i< listItems.length; i++){
  listItems[i].addEventListener("click", function(event){
    this.classList.toggle("clicked");
  })
}

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
button.addEventListener("click", createListElement);

input.addEventListener("keypress", addListAfterKeypress);