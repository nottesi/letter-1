document.addEventListener("DOMContentLoaded", function() {
  const revealButton = document.getElementById("revealButton");
  const loveLetter = document.querySelector(".love-letter");

  // Add event listener to the reveal button
  revealButton.addEventListener("click", function() {
      // Toggle the 'hidden' class on the love letter to reveal it
      loveLetter.classList.toggle("hidden");
      // Toggle the opacity of the love letter for a smooth transition effect
      if (loveLetter.classList.contains("hidden")) {
          loveLetter.style.opacity = 0;
      } else {
          loveLetter.style.opacity = 1;
      }
  });
});