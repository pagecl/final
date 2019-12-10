// Get the modal
var modal = document.getElementById("modal1");

// Get the button that opens the modal
var baggie = document.getElementById("baggie");

// When the user clicks the button, open the modal
baggie.onclick = function() {
  modal.style.display = "block";
}

var modal2 = document.getElementById("modal2");
var manuel = document.getElementById("manuel");
manuel.onclick = function() {
  modal2.style.display = "block";
}



window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }else if (event.target == modal2) {
    modal2.style.display = "none";
  }else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
