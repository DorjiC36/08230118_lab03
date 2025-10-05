// Dark Mode Toggle with Emoji Switch + Persistent Storage
const toggleBtn = document.getElementById("theme-toggle");

// Apply saved mode on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  if (toggleBtn) toggleBtn.textContent = "🌞"; // show sun if dark mode active
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      toggleBtn.textContent = "🌞"; // sun when dark mode
      localStorage.setItem("darkMode", "enabled"); // save preference
    } else {
      toggleBtn.textContent = "🌙"; // moon when light mode
      localStorage.setItem("darkMode", "disabled"); // save preference
    }
  });
}

// Contact Form Handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form submitted successfully (Demo only)!");
    contactForm.reset();
  });
}

// Hover effect for projects
const projects = document.querySelectorAll(".project");
projects.forEach((proj) => {
  proj.addEventListener("mouseover", () => {
    proj.style.transform = "scale(1.05)";
  });
  proj.addEventListener("mouseout", () => {
    proj.style.transform = "scale(1)";
  });
});
