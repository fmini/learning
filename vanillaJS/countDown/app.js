let stopped = false;

document.querySelector('#date').addEventListener('change', e => {
  document.querySelector('#dateTitle').focus();
  return (targetDate = e.target.value);
});

document.querySelector('#dateTitle').addEventListener('keyup', e => {
  if (e.target.value.length > 3) {
    e.target.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    document.querySelector('#submit').disabled = false;
    document.querySelector('#submit').style.backgroundColor =
      'rgba(0, 255, 0, 0.3)';
  }
});

document.querySelector('#submit').addEventListener('click', () =>
  setInterval(() => {
    timeTilDate(targetDate);
  }, 1000)
);

document.querySelector('#submit').addEventListener('click', () => {
  document.querySelector('.title').innerText =
    'Count down to ' + document.querySelector('#dateTitle').value + '!';
  document.querySelector('#stop').disabled = false;
});

document.querySelector('#stop').addEventListener('click', () => {
  stopped = true;
  console.log(stopped);
});

console.log(stopped);

let runCounter = countdown => {
  document.querySelector('#countdown-days').innerHTML = countdown.days;
  document.querySelector('#countdown-hours').innerHTML = countdown.hours;
  document.querySelector('#countdown-minutes').innerHTML = countdown.minutes;
  document.querySelector('#countdown-secs').innerHTML = countdown.secs;
};

const timeTilDate = targetDate => {
  const today = Date.now();
  const targetDay = new Date(targetDate);

  const seconds = Math.floor((targetDay - today) / 1000);
  const days = Math.floor(seconds / 3600 / 24);
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = Math.floor(seconds) % 60;

  countdown = { days, hours, minutes, secs };

  runCounter(countdown);
};
