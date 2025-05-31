document.addEventListener("DOMContentLoaded", () => {
  fetch('descriptions.json')
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll(".imagebox").forEach((img, index) => {
        img.addEventListener("click", () => {
          const key = "image" + (index + 1);
          const description = data[key] || "No description available.";
          const textDiv = img.parentElement.querySelector(".text-description");
          textDiv.textContent = description;
          textDiv.style.display = "block";
        });
      });
    })
    .catch(error => console.error("Failed to load descriptions:", error));
});
