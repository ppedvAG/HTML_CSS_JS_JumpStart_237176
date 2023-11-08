function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Bitte geben Sie eine Aufgabe ein.");
        return;
    }

    const pendingTasks = document.getElementById("pendingTasks");
    const li = document.createElement("li");
    li.textContent = taskText;

    // Zufälliges Ablaufdatum generieren (heute + 1 bis 7 Tage)
    const randomDays = Math.floor(Math.random() * 7) + 1;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + randomDays);

    const dateSpan = document.createElement("span");
    dateSpan.className = "date";
    dateSpan.textContent = dueDate.toLocaleDateString();

    li.appendChild(dateSpan);

    li.onclick = function () {
        if (!li.classList.contains("completed")) {
            li.classList.add("completed");
            li.querySelector(".date").textContent = "Erledigt";
            const completedTasks = document.getElementById("completedTasks");
            completedTasks.appendChild(li);
        } else {
            li.classList.remove("completed");
            pendingTasks.appendChild(li);
            li.querySelector(".date").textContent = dueDate.toLocaleDateString();
        }
    };

    pendingTasks.appendChild(li);
    taskInput.value = "";
}
