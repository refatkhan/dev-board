// change background color with math function
function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
// Date in nav
const dateContainer = document.getElementById("date");
const p = document.createElement("p");
let dateString = new Date().toDateString();
let formattedDate = dateString.replace(" ", "<br>");
p.innerHTML = formattedDate;
p.style.padding = '20px'
dateContainer.appendChild(p);

// redirect
document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

// button related DOM
const navCount = document.getElementById('updateCount');
let totalNavCount = parseInt(navCount.innerText);
const taskCount = document.getElementById("task-assigned");
let totalCount = parseInt(taskCount.innerText);
let disabledButton = 0;
const buttons = document.querySelectorAll(".complete-btn");
for (button of buttons) {
  button.addEventListener("click", function (event) {
    alert("Board updated successfully");
    event.target.setAttribute("disabled", true);
    disabledButton++;
    totalCount--;
    totalNavCount++;
    taskCount.innerText = totalCount;
    navCount.innerText = totalNavCount;
    if (disabledButton === buttons.length) {
      alert("Congrates!!! You have completed all the current task");
    }
  });
}
// activity history 
const clearHistory = document.getElementById('historyClear');
const eventDetails = document.getElementById('eventHistory');
for (let button of buttons) {
  button.addEventListener('click', function() {
    let card = button.parentNode.parentNode.parentNode;
    let cardTitle = card.getElementsByClassName('task-title')[0].innerText;
    let TimeHistory = new Date().toLocaleTimeString();
    const div = document.createElement('div');
    div.innerHTML = `
      <p class=" font-medium p-5 rounded-xl bg-slate-100">
        You have completed the task ${cardTitle} at ${TimeHistory}
      </p>
    `;
    
    eventDetails.appendChild(div);
  });
}
clearHistory.addEventListener('click', function() {
  eventDetails.innerHTML = '';
});
