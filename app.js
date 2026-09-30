const shareButton = document.querySelector(".share");

shareButton.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
  shareButton.classList.toggle("active");
});

const shareMenu = document.querySelector(".share-menu");
