let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;

let streaks = JSON.parse(localStorage.getItem("streaks")) || {
    gym: 0,
    study: 0,
    coding: 0
};

function updateUI() {
    document.getElementById("xp").innerText = xp;
    document.getElementById("level").innerText = Math.floor(xp / 100);

    document.getElementById("gym-streak").innerText = streaks.gym;
    document.getElementById("study-streak").innerText = streaks.study;
    document.getElementById("coding-streak").innerText = streaks.coding;
}

function completeTask(task, points) {
    xp += points;
    streaks[task] += 1;

    localStorage.setItem("xp", xp);
    localStorage.setItem("streaks", JSON.stringify(streaks));

    updateUI();
}

window.onload = function () {
    updateUI();
};

