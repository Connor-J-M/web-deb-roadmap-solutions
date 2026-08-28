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

var dropdowns = document.getElementsByClassName("option");
    var i;
    var u = 0;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      createOptionListener(openDropdown, i)
    }

function createOptionListener(openDropdown, i) {
  openDropdown.addEventListener("click", function(e){
    document.getElementById("dropbtn").innerHTML = i + 1;
  })
  console.log(openDropdown.innerHTML);
}
