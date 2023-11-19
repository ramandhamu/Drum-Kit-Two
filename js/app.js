// first get the button

const wButton = document.querySelector('.w');
const aButton = document.querySelector('.a');
const sButton = document.querySelector('.s');
const dButton = document.querySelector('.d');
const jButton = document.querySelector('.j');
const kButton = document.querySelector('.k');
const lButton = document.querySelector('.l');

// now get the audio files

const wAudio = document.querySelector('#wAudio');
const aAudio = document.querySelector('#aAudio');
const sAudio = document.querySelector('#sAudio');
const dAudio = document.querySelector('#dAudio');
const jAudio = document.querySelector('#jAudio');
const kAudio = document.querySelector('#kAudio');
const lAudio = document.querySelector('#lAudio');

// now write the function to add the event listener to the buttons

function addEventButton(button, audio) {
    button.addEventListener('click', function() {
        audio.play();
        button.classList.add('avtive');
        setTimeout(() => {
            button.classList.remove('active')
        }, 200);
    });
};

addEventButton(wButton, wAudio);
addEventButton(aButton, aAudio);
addEventButton(sButton, sAudio);
addEventButton(dButton, dAudio);
addEventButton(jButton, jAudio);
addEventButton(kButton, kAudio);
addEventButton(lButton, lAudio);

function playAudio(button, audio) {
    audio.play();
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active');
    }, 200);
}

document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toLowerCase();
    switch (pressedKey) {
        case 'w':
            playAudio(wButton, wAudio);
            break;
        case 'a':
            playAudio(aButton, aAudio);
            break;
        case 's':
            playAudio(sButton, sAudio);
            break;
        case 'd':
            playAudio(dButton, dAudio);
            break;
        case 'j':
            playAudio(jButton, jAudio);
            break;
        case 'k':
            playAudio(kButton, kAudio);
            break;
        case 'l':
            playAudio(lButton, lAudio);
            break;
    }
})