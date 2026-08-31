//Creates and loops through list of elements in dropdown and uses createOptionListener() to assign each an event listener
var dropdowns = document.getElementsByClassName("option");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      createOptionListener(openDropdown, i);
      
    }

//Toggles list to be visible when option select is clicked
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        // openDropdown.addEventListener('click', function(e){
        //   console.log("Working");
        }
      }
    }
} 

//Creates event listener for object and assigns inner HTML of object to dropdown button
function createOptionListener(openDropdown, i) {
  openDropdown.addEventListener("click", function(e){
    document.getElementById("dropbtn").innerHTML = openDropdown.innerHTML;
    setSelected(openDropdown);
  })
}

//Changes color of text to indicate selected option
function setSelected(selectedOption) {
    var dropdowns = document.getElementsByClassName("option");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
       if (openDropdown != selectedOption) {
    openDropdown.style.color = "black";
    } else {
         openDropdown.style.color = "red";
    }
  }
}
