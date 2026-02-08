let xp = localStorage.getItem("xp") ? parseInt(localStorage.getItem("xp")) : 0;

function updateUI() {
    document.getElementById("xp").innerText = xp;
    document.getElementById("level").innerText = Math.floor(xp / 100);
}

function completeTask(points) {
    xp += points;
    localStorage.setItem("xp", xp);
    updateUI();
}

function saveJournal() {
    let text = document.getElementById("journalText").value;
    localStorage.setItem("journal", text);
    alert("Journal saved!");
}

function saveGratitude() {
    let text = document.getElementById("gratitudeText").value;
    localStorage.setItem("gratitude", text);
    alert("Gratitude saved!");
}

window.onload = function () {
    updateUI();
    document.getElementById("journalText").value = localStorage.getItem("journal") || "";
    document.getElementById("gratitudeText").value = localStorage.getItem("gratitude") || "";
};
