// change background color with math function 
function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
// Date in nav 
const dateContainer = document.getElementById("date");
const p = document.createElement("p");
let dateString = new Date().toDateString();
let formattedDate = dateString.replace(" ", "<br>");
p.innerHTML = formattedDate; 
dateContainer.appendChild(p);

// redirect 
document.getElementById('blog').addEventListener('click',function(){
    window.location.href='blog.html'
})

// button alert 
let disabledButton = 0;
const buttons = document.querySelectorAll('.complete-btn');
for(button of buttons){
    button.addEventListener('click',function(event){
        alert('Board Updated');;
        event.target.setAttribute('disabled',true);
        disabledButton++;
        if(disabledButton === buttons.length){
            alert('all done');
        }
    })
}