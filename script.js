const heading = document.querySelector('#heading');

const keyFrames = {
    opacity: [0, 1],
    translate: ['0 100px', '0 -50px'],
};

const options = {
    duration: 2000,
    direction: 'reverse',
    easing: 'ease-out',
};

heading.animate(keyFrames, options);

//準備完了
console.log('-STANDBY-');