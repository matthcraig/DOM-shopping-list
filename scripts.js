var button = document.getElementById("enter");
var input = document.getElementById("userinput");

button.addEventListener("click", function(){
  var li = document.createElement("li");
  li.prependChild(document.createTextNode("testing"));
})