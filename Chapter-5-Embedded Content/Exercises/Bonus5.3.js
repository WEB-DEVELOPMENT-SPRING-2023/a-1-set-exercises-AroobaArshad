const buttons = document.querySelectorAll('.Audio_Sample');

buttons.forEach(button => {
  const audio = new Audio(button.dataset.src);

  button.addEventListener('click', () => {
    audio.currentTime = 0;
    audio.play();
  });

  button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'rgb(176, 163, 140)';
    button.style.color = '#fff';
  });

  button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
  });

  const number = button.querySelector('span:first-child');
  const name = button.querySelector('span:last-child');

  number.style.fontSize = '20px';
  number.style.fontWeight = 'bold';

  name.style.fontSize = '16px';
  name.style.fontWeight = 'bold';
});

function textToAudio() {
  let msg = document.getElementById("text-to-speech").value;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-Us"
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}


// Variables for scrolling through audio samples
const Sound_Board = document.getElementById('Sound_Board');
const Audio_Samples = Sound_Board.querySelectorAll('.Audio-Sample');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
const sampleLengths = document.querySelectorAll('.SampleLength');
const pageSize = 9;
let currentPage = 1;
let totalPages = Math.ceil(document.querySelectorAll('.Audio-Sample[style*="display: block"]').length / pageSize);

function showPage(page) {
  Audio_Samples.forEach((sample, index) => {
    if (index >= (page - 1) * pageSize && index < page * pageSize) {
      sample.style.display = 'block';
    } else {
      sample.style.display = 'none';
    }
  });
}


leftArrow.style.display = 'block';

leftArrow.addEventListener('click', () => {
  currentPage--;
  if (currentPage === 1) {
    leftArrow.style.display = 'block';
  }
  rightArrow.style.display = 'block';
  showPage(currentPage);
});

rightArrow.addEventListener('click', () => {
  currentPage++;
  if (currentPage === totalPages) {
    rightArrow.style.display = 'block';
  }
  leftArrow.style.display = 'block';
  showPage(currentPage);
});

showPage(currentPage);

// Dynamically display sample length
Audio_Samples.forEach((sample) => {
  const audio = sample.querySelector('audio');
  const length = Math.round(audio.duration);
  const minutes = Math.floor(length / 60);
  const seconds = length - minutes * 60;
  const lengthString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  const lengthElement = sample.querySelector('.SampleLength');
  lengthElement.textContent = lengthString;
});

document.addEventListener("DOMContentLoaded", function() {
  document.body.classList.add("loaded");
});
