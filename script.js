let xp = 0;

window.onload = function () {
  loadXP();
  loadJournal();
  showDate();
};

function showDate() {
  const today = new Date().toLocaleDateString();
  document.getElementById("todayDate").innerText = today;
}

/* ---------------- XP SYSTEM ---------------- */

function loadXP() {
  const savedXP = localStorage.getItem("xp");
  if (savedXP) {
    xp = parseInt(savedXP);
  }
  updateXP();
}

function updateXP() {
  document.getElementById("xp").innerText = "XP: " + xp;
  localStorage.setItem("xp", xp);
}

/* ---------------- TASK SYSTEM ---------------- */

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

/* ---------------- JOURNAL SYSTEM ---------------- */

function loadJournal() {
  const todayKey = "journal-" + new Date().toLocaleDateString();
  const savedText = localStorage.getItem(todayKey);
  if (savedText) {
    document.getElementById("journalInput").value = savedText;
  }
}

function saveJournal() {
  const text = document.getElementById("journalInput").value;
  const todayKey = "journal-" + new Date().toLocaleDateString();
  localStorage.setItem(todayKey, text);
}




