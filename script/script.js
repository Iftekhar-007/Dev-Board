let numOfRemainWork = document.getElementsByClassName("assign-card").length;
console.log(numOfRemainWork);
document.getElementById("remain-work").innerText = numOfRemainWork;
// let convertedRemainWork = Number(remainWork);

document.querySelectorAll("#complete-btn").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");

    btn.disabled = true;

    if (numOfRemainWork > 0) {
      numOfRemainWork--;
      document.getElementById("remain-work").innerText = numOfRemainWork;
    }

    let doneNumber = document.getElementById("done-number").innerText;
    doneNumber = Number(doneNumber) + 1;
    document.getElementById("done-number").innerText = doneNumber;
  });
});
