const heading = document.querySelector('#heading');

const keyFrames = {
    color: ['transparent', '#fff'],
    backgroundPosition: ['100% 0', '0 0'],
    rotate: ['x 360deg', 0],
};

const options = {
    duration: 2000,
    easing: 'ease',
    iterations: Infinity,
};

heading.animate(keyFrames, options);

//準備完了
console.log('-STANDBY-');