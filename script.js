// function for discover btn
document.getElementById("discoverBtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// function for present date
document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();
  var dateElement = document.getElementById("currentDate");

  if (dateElement) {
    dateElement.innerText =
      getMonthName(today.getMonth()) +
      " " +
      today.getDate() +
      " " +
      today.getFullYear();
  }

  var dayElement = document.getElementById("currentDay");
  if (dayElement) {
    dayElement.innerText = getDayName(today.getDay());
  }
});

// function for month name
function getMonthName(monthIndex) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[monthIndex];
}

// function for day name
function getDayName(dayIndex) {
  var days = ["Sun,", "Mon,", "Tue,", "Wed,", "Thu,", "Fri,", "Sat,"];
  return days[dayIndex];
}

// function for task card
document.addEventListener("DOMContentLoaded", function () {
  var completedButtons = document.getElementsByClassName("completedButton");
  var completedTasksCount = 0;

  // function for completed button
  for (var i = 0; i < completedButtons.length; i++) {
    completedButtons[i].addEventListener("click", function () {
      var taskCard = this.closest(".bg-white");
      if (!taskCard) return;

      var taskTitle = taskCard.getElementsByTagName("h3")[0].innerText;

      alert("Board Updated Successfully.");

      // function for activity history
      var activityMessage = document.createElement("div");
      activityMessage.className =
        "bg-blue-50 p-3 rounded-lg text-sm text-gray-700 shadow-sm";
      activityMessage.innerHTML =
        "You have completed the task " +
        taskTitle +
        " at " +
        new Date().toLocaleTimeString();
      document.getElementById("activityEntries").appendChild(activityMessage);

      //  for disable themeBtn

      this.disabled = true;
      this.className += " bg-gray-500";

      //  function for Navbar and  Total Task Count
      var navbarNumber = document.getElementById("navbarNumber");
      var totalCardNumber = document.getElementById("totalCardNumber");

      if (navbarNumber) {
        navbarNumber.innerText = parseInt(navbarNumber.innerText) + 1;
      }

      if (totalCardNumber) {
        totalCardNumber.innerText = parseInt(totalCardNumber.innerText) - 1;
      }

      completedTasksCount++;

      // function for congratulation allert
      if (completedTasksCount === completedButtons.length) {
        alert("Congratulations! You have completed all tasks.");
      }
    });
  }
});

// function for clear history btn

var clearHistoryButton = document.getElementById("clearHistory");
if (clearHistoryButton) {
  clearHistoryButton.addEventListener("click", function () {
    var activityEntries = document.getElementById("activityEntries");
    if (activityEntries) {
      activityEntries.innerHTML = ""; // সমস্ত activity history মুছে ফেলবে
    }
  });
}

// function for color theme
var colors = [
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

var currentColorIndex = 0;

var themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
  themeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = colors[currentColorIndex];

    currentColorIndex++;
    if (currentColorIndex >= colors.length) {
      currentColorIndex = 0; // যদি সমস্ত কালার শেষ হয়, রিসেট হবে।
    }
  });
}
