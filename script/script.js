let numberOfRemainWork = document.getElementsByClassName("assign-card").length;
console.log(numberRemainWork);

let remainWork = document.getElementById("remain-work"),
  innerText;
let convertedRemainWork = Number(remainWork);

document.querySelectorAll("#complete-btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated");

    // let remainWork = document.getElementById("remain-work").innerText;
    // let convertedRemainWork = Number(remainWork);
    // console.log(convertedRemainWork);
    // convertedRemainWork.innerText = remainWork - 1;
  });
});
