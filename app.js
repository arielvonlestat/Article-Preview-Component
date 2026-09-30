const shareButton = document.querySelector(".share");
const shareMenu = document.querySelector(".share-menu");

shareButton.addEventListener("click", () => {
  shareMenu.classList.toggle("active");
  shareButton.classList.toggle("active");
});

const shareText = document.querySelector(".share-text");

shareText.addEventListener("click", () => {
  console.log("You found the easter egg!");
  const easterEGG = navigator.userAgent;

  if (
    easterEGG.includes("iPhone") ||
    easterEGG.includes("iPad") ||
    easterEGG.includes("Android")
  ) {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  } else if (easterEGG.includes("Edg")) {
    prompt(
      "I know this is obnoxious, I am truly sorry but the good news is you've found the Easter Egg! Congrats! After you've pressed OK, try typing edge://surf into your browser search! Enjoy!",
    );
  } else if (easterEGG.includes("Firefox")) {
    alert("Welcome to......Jurassic Park");
    window.location.href = "https://jurassicsystems.com/";
  } else if (easterEGG.includes("Chrome")) {
    alert(
      "Welcome Weary Traveler, I hate to do it but I must call upon you once again! I do not know who else to turn to. Once the wizard has teleported you, go to the DevTools, click on the almighty CONSOLE & say YES to start your quest, GOD SPEED!",
    );
    window.location.href =
      "https://www.google.com/search?q=text+adventure&oq=&gs_lcrp=EgZjaHJvbWUqCQgCECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyEggFECMYJxjqAhjwBRieBhiiBzIPCAYQABhCGLQCGOoCGNsFMg8IBxAAGEIYtAIY6gIY2wXSAQkxNjkzajBqMTWoAgiwAgHxBYvMB-xaM9vx&sourceid=chrome&source=chrome.rb&ie=UTF-8";
  } else {
    alert("Welcome to......Jurassic Park");
    window.location.href = "https://jurassicsystems.com/";
  }
});
