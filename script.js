let xp = 0;

// Load XP from storage when page opens
window.onload = function () {
  const savedXP = localStorage.getItem("xp");
  if (savedXP) {
    xp = parseInt(savedXP);
    updateXP();
  }
};

function updateXP() {
  document.getElementById("xp").innerText = "XP: " + xp;
  localStorage.setItem("xp", xp);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  const span = document.createElement("span");
  span.innerText = taskText;

  const btn = document.createElement("button");
  btn.innerText = "✔";
  btn.onclick = function () {
    taskDiv.remove();
    xp += 10;
    updateXP();
  };

  taskDiv.appendChild(span);
  taskDiv.appendChild(btn);

  document.getElementById("taskList").appendChild(taskDiv);
  input.value = "";
}



