// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
 

const themelink = document.querySelector("#theme-link");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
  //        document.body.classList.add("dark-theme");
   themelink.href = "DarkMode.css";
}
 
// Listen for a click on the button 
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  //        document.body.classList.toggle("dark-theme");
  if (themelink.getAttribute("href") == "Style.css") {
    // ... then switch it to "dark theme"
    themelink.href = "DarkMode.css";
  // Otherwise...
  } else {
    // ... switch it to "light theme"
    themelink.href = "Style.css";
  }
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (themelink.getAttribute("href") == "DarkMode.css") {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});