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
    let level = Math.floor(xp / 100);
    checkReward(level);

    updateUI();
}

window.onload = function () {
    updateUI();
};
const rewards = {
    5: "🎬 Movie Time!",
    10: "🛍️ Buy something small!",
    15: "🍕 Cheat Meal!",
    20: "🎉 Fun Day!"
};

function checkReward(level) {
    if (rewards[level]) {
        document.getElementById("rewardText").innerText = rewards[level];
        document.getElementById("rewardPopup").style.display = "flex";
    }
}

function closePopup() {
    document.getElementById("rewardPopup").style.display = "none";
}
function setDate() {
    let today = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("todayDate").innerText = today.toLocaleDateString("en-US", options);
}

setDate();

document.querySelectorAll("input[type=checkbox]").forEach(box => {
    box.addEventListener("change", function() {
        if (this.checked) {
            this.parentElement.style.background = "#16a34a";
        }
    });
});
let lastDate = localStorage.getItem("lastDate");
let today = new Date().toDateString();

if (lastDate !== today) {
    localStorage.setItem("lastDate", today);
    localStorage.removeItem("streaks"); // resets daily ticks visual
}

