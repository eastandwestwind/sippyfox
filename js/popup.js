
function renderStatus(statusText) {
  document.getElementById('reminder').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
    renderStatus('drink dat water');
});

chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
});