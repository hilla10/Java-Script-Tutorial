// Break chain animation
function breakChain() {
  const chain = document.getElementById('chain');
  chain.innerHTML = '&#xf0c1';

  setTimeout(() => {
    chain.innerHTML = '&#xf127';
  }, 1000);
}

// Coll animation
breakChain();

// animate every 2 seconds
setInterval(breakChain, 2000);

// Battery charge animation
function chargeBattery() {
  const battery = document.getElementById('battery');
  battery.innerHTML = '&#xf244';

  setTimeout(() => (battery.innerHTML = '&#xf243'), 1000);
  setTimeout(() => (battery.innerHTML = '&#xf242'), 2000);
  setTimeout(() => (battery.innerHTML = '&#xf241'), 3000);

  setTimeout(() => (battery.innerHTML = '&#xf240'), 4000);
}
// Run animation
chargeBattery();

// Ren animation every 5 seconds
setTimeout(chargeBattery, 5000);

// HourGlass tip animation
function hourglassTip() {
  const hourglass = document.getElementById('hourglass');
  hourglass.innerHTML = '&#xf251';

  setTimeout(() => (hourglass.innerHTML = '&#xf252'), 1000);

  setTimeout(() => (hourglass.innerHTML = '&#xf253'), 2000);

  setTimeout(() => (hourglass.innerHTML = '&#xf254'), 3000);
}

hourglassTip();

// Ren animation every 4 seconds
setTimeout(hourglassTip, 4000);
