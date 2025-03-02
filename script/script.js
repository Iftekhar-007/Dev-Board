let numOfRemainWork = document.getElementsByClassName("assign-card").length;
console.log(numOfRemainWork);
document.getElementById("remain-work").innerText = numOfRemainWork;
// let convertedRemainWork = Number(remainWork);
let titles = document.getElementsByClassName("titles").event;

let message = document.getElementById("message");

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

    let doneMessage = document.createElement("p");
    doneMessage.innerText = `you have complete the task ${titles} at today`;
    message.appendChild(doneMessage);
  });
});
