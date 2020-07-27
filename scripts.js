

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.getElementsByTagName('li');

button.addEventListener('click', Onclick);
input.addEventListener('keypress', addListAfterKeypress);

listItems();
buttonListElement();

function inputLength(){
  return input.value.length;
}
function createListElement(){
  var li = document.createElement('li');
  var button = document.createElement('button');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  li.appendChild(button);
  button.innerHTML = "Delete";
  input.value = "";
  buttonListElement();
  listItems();
};

function Onclick(){
    if(inputLength() > 0){
      createListElement();
    }
  }

  function addListAfterKeypress(){
  if(inputLength() > 0 && event.keyCode === 13){
    createListElement();
  }
}

function listItems(){
  for (i=0; i<li.length; i++){
    li[i].addEventListener('click', changeClass)
  }
}

function changeClass(){
  this.classList.toggle('clicked');
}

function buttonListElement(){
  var button = document.querySelectorAll('li button');
  for( i=0; i<button.length; i++){
  button[i].addEventListener('click', clearElement)
  }
}
function clearElement(){
  for(var i=0; i<li.length; i++){
    this.parentNode.remove()
  }
};