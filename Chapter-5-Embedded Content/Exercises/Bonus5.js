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

  number.style.fontSize = '24px';
  number.style.fontWeight = 'bold';

  name.style.fontSize = '16px';
  name.style.fontWeight = 'bold';
});
