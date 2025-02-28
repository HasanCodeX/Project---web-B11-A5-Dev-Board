// Function for discover button and blog page redirection.....

document.getElementById("discoverBtn").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// Function for show present date ....
document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("currentDate");

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };

  dateElement.textContent = today.toLocaleDateString("en-US", options);
});

// Function for show present day ...

document.addEventListener("DOMContentLoaded", function () {
  const dateElement = document.getElementById("currentDay");

  const today = new Date();
  const options = { weekday: "long" };

  dateElement.textContent = today.toLocaleDateString("en-US", options);
});
