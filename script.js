
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); 

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");


envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex"; 

  setTimeout(() => {
    letterWindow.classList.add("open");
  }, 50);
});


noBtn.addEventListener("mouseover", () => {
  const min = 120; 
  const max = 260;

  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transition = "transform 0.2s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});


yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee! 💖";

 
  catImg.src = "kiss_kitty.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";
});
