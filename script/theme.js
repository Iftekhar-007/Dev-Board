let theme = document.getElementById("theme-changer"); // Select the button by its ID

theme.addEventListener("click", function () {
  // Generate a random color in hexadecimal format
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Apply the random color to the button's background
  document.body.style.backgroundColor = randomColor;
});
