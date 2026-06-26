const input = document.getElementById('value-input');
const progress = document.querySelector('.card__progress');

input.addEventListener('input', (e) => {
  const val = Math.max(0, Math.min(100, Number(e.target.value)));
  e.target.value = val;
  progress.style.setProperty('--progress', `${val * 3.6}deg`);
});

const animateCheckbox = document.getElementById('animate-checkbox');

animateCheckbox.addEventListener('change', (e) => {
  progress.classList.toggle('card__progress--animated', e.target.checked);
});