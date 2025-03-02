let numOfRemainWork = document.getElementsByClassName("assign-card").length;
console.log(numOfRemainWork);
document.getElementById("remain-work").innerText = numOfRemainWork;
let title = document.querySelectorAll(".titles");
// let convertedRemainWork = Number(remainWork);

let date = new Date();

let formatDate =
  date.getFullYear() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getDate() +
  " " +
  "at" +
  " " +
  date.getHours() +
  " " +
  "hours" +
  ":" +
  date.getMinutes() +
  " " +
  "minutes" +
  ":" +
  date.getSeconds() +
  " " +
  "seconds";

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
    doneMessage.innerText = `You have done the task: ${title.innerText} on ${formatDate}`;
    let message = document.getElementById("message");
    message.appendChild(doneMessage);

    doneMessage.style.backgroundColor = "#F4F7FF";
    doneMessage.style.padding = "10px";
    doneMessage.style.marginTop = "20px";
    doneMessage.style.borderRadius = "10px";
    doneMessage.style.fontFamily = "poppins";
    doneMessage.style.fontSize = "1rem";
  });
});
