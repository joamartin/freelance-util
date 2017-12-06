'use strict';

const HOURS_REGEX = /[0-9]{1,}/;
const MINUTES_REGEX = /[0-5][0-9]/;
const TO_DAYS_ERROR = 'Invalid inputs!';

function main() {
  const hoursInput = document.querySelector('#hours-input');
  const minutesInput = document.querySelector('#minutes-input');
  const toDaysButton = document.querySelector('#to-days-button');
  const toDaysResult = document.querySelector('#to-days-result');

  toDaysButton.addEventListener('click', ev => {
    const hours = hoursInput.value;
    const minutes = minutesInput.value;
    const valid = HOURS_REGEX.test(hours) && MINUTES_REGEX.test(minutes);
    toDaysResult.innerHTML = valid ? '' + toDays(hours, minutes) + ' days' : TO_DAYS_ERROR;
  });

  function toDays(hours, minutes) {
    const h = parseInt(hours);
    const m = parseInt(minutes);
    return Math.round( ( ( h + ( m * (1 / 60) ) ) / 8 ) * 100 ) / 100;   
  }
}

main();