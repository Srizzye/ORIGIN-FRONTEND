// animation time
console.log("JS HIT");
setTimeout(() => {
  document.body.classList.add("fade-out");
}, 5200);

// Redirect after fade-out
setTimeout(() => {
  window.location.href = "register.html"; // change if needed
}, 5800);
