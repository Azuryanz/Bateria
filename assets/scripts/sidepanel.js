let info = document.querySelectorAll(".dropdown-content");
for(let i = 0; i < info.length; i++){
  info[i].style.width = "500px";
}
/* Set the width of the sidebar to 500px (show it) */
function openNav() {
  document.getElementById("mySidepanel").style.width = "532px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}