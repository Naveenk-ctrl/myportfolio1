
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Optionally store preference in localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });

  // Load saved theme on page load
  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-mode");
    }
  });

