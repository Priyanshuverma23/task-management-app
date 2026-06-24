let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const count = document.getElementById("count");


// display tasks
function render(){

list.innerHTML="";


tasks.forEach((task,index)=>{


let li=document.createElement("li");


li.innerHTML=`

<span class="${task.completed ? "done":""}">
${task.text}
</span>


<div class="actions">

<button class="complete"
onclick="completeTask(${index})">
✓
</button>


<button class="edit"
onclick="editTask(${index})">
Edit
</button>


<button class="delete"
onclick="deleteTask(${index})">
X
</button>


</div>

`;


list.appendChild(li);


});


count.innerHTML =
"Total Tasks : "+tasks.length;


}



// Add task

function addTask(){


let text=input.value.trim();


if(text===""){
alert("Enter task");
return;
}


tasks.push({

text:text,
completed:false

});


save();

input.value="";

}



// complete task

function completeTask(index){

tasks[index].completed =
!tasks[index].completed;


save();

}



// edit task

function editTask(index){


let newTask =
prompt(
"Edit task:",
tasks[index].text
);


if(newTask && newTask.trim()!=""){

tasks[index].text=newTask;

save();

}

}



// delete task

function deleteTask(index){

if(confirm("Delete task?")){

tasks.splice(index,1);

save();

}

}



// save to browser

function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

render();

}


render();