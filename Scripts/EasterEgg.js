// Select the button
const MyImage = document.querySelector(".mainphoto");
var clicks = 0;
// Listen for a click on the button 
MyImage.addEventListener("click", function() {

clicks += 1;

if(clicks == 1)
{
  alert("Don`t click on this image, or i'll hide it from you!");
}
else if(clicks > 1 && clicks <= 4)
{
  alert("No!");
}
else if(clicks == 5)
{
  alert("No, god! Please NO!");
}
else if(clicks == 6)
{
  alert("NOOOOOOOOOOOOOOOOOOOOOOOOO");
}
else if(clicks == 7)
{
  alert("Ok...");
}
else if(clicks == 8)
{
  alert("I once again asking for you to stop that...");
}
else if(clicks == 9)
{
  alert("You have a last chanse to stop!");
}
else if(clicks == 10)
{
  alert("Ok, don't even ask me to undo that!");
  document.getElementById("mainPhoto").style.backgroundImage = "none";
}

});