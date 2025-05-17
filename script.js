const images = ["assets/images/1.jpg", "assets/images/2.jpg"];
let bgIndex = 0;
const bgOverlay = document.getElementById("background-overlay");

function changeBackground() {
  bgOverlay.style.backgroundImage = `url('${images[bgIndex]}')`;
  bgIndex = (bgIndex + 1) % images.length;
}
setInterval(changeBackground, 5000);
changeBackground();

// Notlar
document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

// Müzik
const musicList = ["assets/music/1.mp3", "assets/music/2.mp3"];
let currentTrack = 0;
const audio = document.getElementById("audio");

document.getElementById("playPause").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

document.getElementById("next").addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % musicList.length;
  audio.src = musicList[currentTrack];
  audio.play();
});

audio.src = musicList[currentTrack];

// Mesaj ve tepki
const messageInput = document.getElementById("messageInput");
const sendMessage = document.getElementById("sendMessage");
const messages = document.getElementById("messages");
const reactionImage = document.getElementById("reactionImage");

const reactions = {
  "seni seviyorum": "assets/reactions/love.gif",
  "mutlu": "assets/reactions/happy.gif"
};

sendMessage.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.textContent = text;
  messages.appendChild(msg);
  messageInput.value = "";

  for (const word in reactions) {
    if (text.toLowerCase().includes(word)) {
      reactionImage.src = reactions[word];
      reactionImage.classList.remove("hidden");
      reactionImage.classList.add("show");

      setTimeout(() => {
        reactionImage.classList.remove("show");
        reactionImage.classList.add("hidden");
      }, 3000);
      break;
    }
  }
});
