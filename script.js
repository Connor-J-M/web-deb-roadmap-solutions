//Intially opens popup after 1.5 seconds
var popup = document.getElementById("myPopup");
setTimeout(closePopup, 1500);   

 //Assigns popup and gives it a click listener
var popupButton = document.getElementById("myPopupButton");
popupButton.addEventListener("click", closePopup);

//Toggles visibility of popup
function closePopup() {
  console.log("Clicked!");
  var popup = document.getElementById("myPopup")
  popup.classList.toggle("show");

  //Adds cookie when popup is closed;
  document.cookie = "cookiesAcc = YES"; 
}

//Problems:
// No option to deny cookies
// Box is not sticky
// "closepopup" runs twice meaning the cookie is applied twice
// User can still interact with site with prompt open
