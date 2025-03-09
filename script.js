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
const clearHisotry = document.getElementById('historyClear');
const eventDetails = document.getElementById('eventHistory');
 for(button of buttons){
    button.addEventListener('click',function(){
        const taskTitle = document.querySelectorAll('.task-title').innerText;
        const time = new Date().toLocaleTimeString();
        const logMessage = 'You have completed the task ' + taskTitle + ' at ' + time;
        eventDetails.innerHTML += '<div class="bg-[#F4F7FF] rounded-lg p-5">' + logMessage + '</div>';
    })
 }
 clearHisotry.addEventListener('click', function() {
    eventDetails.innerHTML = ''; 
  });