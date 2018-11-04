var btn = document.getElementsByTagName('button')[0];
var timer = false;
var hr = document.getElementById('hr');
var mn = document.getElementById('mn');
var sc = document.getElementById('sc');
var currentHr = 0;
var currentMn = 10;
var currentSc = 0;
var timeLoop;

hr.addEventListener('input',() => {
    hr.value = ('0'+hr.value).slice(-2)
})

mn.addEventListener('input',() => {
    mn.value = ('0'+mn.value).slice(-2)
    if (parseInt(mn.value) > 60 ) {
        mn.value = '60';
    }
})

sc.addEventListener('input',() => {
    sc.value = ('0'+sc.value).slice(-2)
    if (parseInt(sc.value) > 60 ) {
        sc.value = '60';
    }
});

btn.addEventListener('click',() => {
    timer = !timer;
    if (timer) {
        startTimer();
    } else {
        endTimer();
    }
});

function startTimer() {
    document.getElementsByClassName('timer')[0].hidden = false;
    document.getElementsByClassName('timer')[1].hidden = true;
    document.getElementsByTagName('button')[0].innerText = 'STOP';
    if (hr.value) {
        currentHr = parseInt(hr.value);
    }
    if (mn.value) {
        currentMn = parseInt(mn.value);
        console.log('Value')
    }
    if (sc.value) {
        currentSc = parseInt(sc.value);
    }
    loop();
    timerLoop = setInterval(() => {loop()},'1000');
}

function endTimer() {
    document.getElementsByClassName('timer')[1].hidden = false;
    document.getElementsByClassName('timer')[0].hidden = true;
    document.getElementsByTagName('button')[0].innerText = 'START';
    clearInterval(timerLoop);
    currentHr = 0;
    currentMn = 10;
    currentSc = 0;

}

function loop() {
    console.log('It Works');
    document.getElementsByClassName('timer')[0].innerText = `${('0'+currentHr).slice(-2)}:${('0'+currentMn).slice(-2)}:${('0'+currentSc).slice(-2)}`;
    if (currentSc == 0) {
        if (currentMn == 0) {
            if (currentHr == 0) {
                console.log('clearing it')
                clearInterval(timerLoop);
            } else {
                currentHr--;
                currentMn = 59;
                currentSc = 59;
            }
        } else {
            currentMn--;
            currentSc = 59;
        }
    } else {
    currentSc --;
    }
}