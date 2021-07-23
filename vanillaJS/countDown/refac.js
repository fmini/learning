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
); //

let runCounter = countdown => {
  document.querySelector('#countdown-days').innerHTML = countdown.days;
  document.querySelector('#countdown-hours').innerHTML = countdown.hours;
  document.querySelector('#countdown-minutes').innerHTML = countdown.minutes;
  document.querySelector('#countdown-secs').innerHTML = countdown.secs;
  // setTimeout(timeTilDate(targetDate), 1000);
};

const timeTilDate = targetDate => {
  const today = Date.now();
  // Code to prompt for date and title of date
  const targetDay = new Date(targetDate);

  const secondsTil = Math.floor((targetDay - today) / 1000);

  const daysTil = secondsTil / 3600 / 24;
  const days = Math.floor(daysTil);

  const hoursTil = (daysTil - days) * 24;
  const hours = Math.floor(hoursTil);

  const minutesTil = (hoursTil - hours) * 60;
  const minutes = Math.floor(minutesTil);

  const seconds = (minutesTil - minutes) * 60;
  const secs = Math.floor(seconds);

  countdown = { days, hours, minutes, secs };

  runCounter(countdown);
};
