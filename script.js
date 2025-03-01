// dash to dock and back function
document.getElementById("discoverBtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// current date and time function
document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("currentDate");

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };

  dateElement.textContent = today.toLocaleDateString("en-US", options);
});

document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("currentDay");

  const today = new Date();
  const options = { weekday: "long" };

  dateElement.textContent = today.toLocaleDateString("en-US", options);
});
// task btn count history function

document.addEventListener("DOMContentLoaded", function () {
  const completedButtons = document.querySelectorAll(".completedButton");

  let completedTasksCount = 0;
  const totalTasks = completedButtons.length;

  completedButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const taskCard = button.closest(".bg-white");
      const taskTitle = taskCard.querySelector("h3").innerText;

      if (confirm(`Board Updated Successfully.`)) {
        const currentTime = new Date().toLocaleTimeString();

        const activityMessage = document.createElement("div");
        activityMessage.classList.add(
          "bg-gray-100",
          "p-3",
          "rounded-lg",
          "text-sm",
          "text-gray-700",
          "shadow-sm"
        );
        activityMessage.innerHTML = `You have completed the task <b>${taskTitle}</b> at ${currentTime}`;
        document.getElementById("activityEntries").appendChild(activityMessage);

        button.disabled = true;
        button.classList.add("bg-gray-500");
        button.innerText = "Completed";

        const navbarNumber = document.getElementById("navbarNumber");
        navbarNumber.innerText = parseInt(navbarNumber.innerText) + 1;

        const totalCardNumber = document.getElementById("totalCardNumber");
        totalCardNumber.innerText = parseInt(totalCardNumber.innerText) - 1;

        completedTasksCount++;

        if (completedTasksCount === totalTasks) {
          alert("Congratulations! You have completed all tasks.");
        }
      }
    });
  });

  const clearHistoryButton = document.getElementById("clearHistory");

  clearHistoryButton.addEventListener("click", function () {
    if (confirm("Are you sure you want to clear all activity history?")) {
      const activityEntries = document.getElementById("activityEntries");
      activityEntries.innerHTML = "";
    }
  });
});

// Function  for random color

const colors = [
  "midnightblue",
  "slategray",
  "teal",
  "darkolivegreen",
  "indigo",
  "crimson",
  "darkslategray",
  "darkgoldenrod",
  "lightseagreen",
  "dimgray",
];

let currentColorIndex = 0;

document.getElementById("themeBtn").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[currentColorIndex];

  currentColorIndex++;

  if (currentColorIndex >= colors.length) {
    currentColorIndex = 0;
  }
});
