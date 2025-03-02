let themer = document.getElementById("theme-changer");
themer.style.cursor = "pointer";

document.getElementById("theme-changer").addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
