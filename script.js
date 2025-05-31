document.addEventListener("DOMContentLoaded", () => {
  fetch('descriptions.json')
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".imagebox").forEach((img, index) => {
        img.addEventListener("click", () => {
          const key = "image" + (index + 1);
          const description = data[key] || "No description available.";
          const textDiv = img.parentElement.querySelector(".text-description");

          if (!textDiv) {
            console.warn("No .text-description div found for", key);
            return;
          }

          const isVisible = textDiv.style.display === "block";
          textDiv.style.display = isVisible ? "none" : "block";
          if (!isVisible) {
            textDiv.textContent = description;
          }
        });
      });
    })
    .catch(error => console.error("Failed to load descriptions:", error));
});
