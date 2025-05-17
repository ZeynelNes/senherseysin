// Arka planlar
const backgrounds = [
  "assets/bg1.jpg",
  "assets/bg2.jpg",
  "assets/bg3.jpg",
];
let bgIndex = 0;
const overlay = document.getElementById("background-overlay");

function setBackground() {
  overlay.style.backgroundImage = `url('${backgrounds[bgIndex]}')`;
}
setBackground();

document.getElementById("changeBackground").addEventListener("click", () => {
  bgIndex = (bgIndex + 1) % backgrounds.length;
  setBackground();
});

// Müzik oynatma
const audio = document.getElementById("audio");
const tracks = [
  "assets/music1.mp3",
  "assets/music2.mp3",
];
let musicIndex = 0;
audio.src = tracks[musicIndex];

document.getElementById("playPause").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

document.getElementById("next").addEventListener("click", () => {
  musicIndex = (musicIndex + 1) % tracks.length;
  audio.src = tracks[musicIndex];
  audio.play();
});

// Sihirli Notlar
const notes = [
  "İyi ki doğdun balım.",
  "Nice yıllarımız olsun SEVGİLİM.",
  "Seninle her şey daha güzel.",
  "Kalbimin en derin yerindesin.",
  "Gülüşünle sabahlarım aydın.",
  "Seninle geçen zaman bir ömre değer.",
  "Sonsuza kadar seninle.",
  "Sen benim en güzel tesadüfümsün.",
  "Aşkın en güzel hali sensin.",
  "Hayat seninle güzel.",
  // ... 40 tane daha eklenebilir
];
const noteContent = document.getElementById("noteContent");
let noteVisible = false;

document.getElementById("magicNote").addEventListener("click", () => {
  if (noteVisible) {
    noteContent.classList.add("hidden");
  } else {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    noteContent.textContent = randomNote;
    noteContent.classList.remove("hidden");
  }
  noteVisible = !noteVisible;
});

// Kalp Mesajı
const heartBtn = document.getElementById("heartBtn");
const heartContent = document.getElementById("heartContent");
let heartVisible = false;

const loveMessage = `Bugün bizim için çok özel bir gün... [mesajın tamamı buraya]`;

heartBtn.addEventListener("click", () => {
  if (heartVisible) {
    heartContent.classList.add("hidden");
  } else {
    heartContent.textContent = loveMessage;
    heartContent.classList.remove("hidden");
  }
  heartVisible = !heartVisible;
});
