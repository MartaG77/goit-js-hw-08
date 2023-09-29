import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const time = throttle(value => {
    localStorage.setItem('timer', value.seconds)
},1000)
player.on('timeupdate', time)
player.setCurrentTime(localStorage.timer).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
        break;
        default:
        break;
    }
});