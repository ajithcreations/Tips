// Function to toggle the visibility of tips
function toggleTips(elementId) {
  var tips = document.getElementById(elementId);
  if (tips.style.display === "none") {
      tips.style.display = "block";
  } else {
      tips.style.display = "none";
  }
}

// Add click event listeners to the headings
document.getElementById("frontend-tips").previousElementSibling.addEventListener("click", function() {
  toggleTips("frontend-tips");
});

document.getElementById("backend-tips").previousElementSibling.addEventListener("click", function() {
  toggleTips("backend-tips");
});

document.getElementById("database-tips").previousElementSibling.addEventListener("click", function() {
  toggleTips("database-tips");
});
