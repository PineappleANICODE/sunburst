function myFunction() {
  var letter = document.getElementById("myInput").value;
  var text;

  
  if (letter === "vapour trail") {
    text = "Well done! You know your stuff!";
    
  
  } else if (letter === "Vapour trail") {
    text = "Well done! You know your stuff!"
    
    } else if (letter === "Vapour Trail") {
    text = "Well done! You know your stuff!";
    
  
  } else {
    text = "Nope! You need to do your pony homework!";
  }
  document.getElementById("demo").innerHTML = text;
}
