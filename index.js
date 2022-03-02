console.log('Hello! Alarms');
let audio = new Audio('Alarm-clock-bell.mp3');
// console.log(audio)
// audio.play();
let stop = document.getElementById('Stop');
stop.addEventListener('click', stoping);

function stoping(){
     audio.pause()
     console.log('stop')
    };
function ringing() {
    audio.play();
}
let alerthtml =`
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Hey! Forgive Me</strong> Please Check your Time
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                `

let myClick = document.getElementById('submit');
myClick.addEventListener('click', alaram);

function alaram(e){
    e.preventDefault();
    let input = document.getElementById('mydate')
    setalarm = new  Date(mydate.value)
    console.log(`alarm set ${setalarm}`)

    let Now = new Date();
    let alarmtime = setalarm-Now;

    if (alarmtime >= 0){
        setInterval(() => {
            console.log('alarm')
                ringing()       
        },alarmtime);     
    }
 
}