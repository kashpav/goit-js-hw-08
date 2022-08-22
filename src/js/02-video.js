const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

var throttle = require(lodash.throttle);
let savedTime;

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  console.log(localstorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', throttle(onPlay, 1000));
// player.on('timeupdate', onPlay);

savedTime = localStorage.getItem('videoplayer - current - time');

if (savedTime) {
  player.setCurrentTime(JSON.parse(savedTime));
}
