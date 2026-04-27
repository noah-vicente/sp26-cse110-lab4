const timer = setInterval(getTime, 1000);
setTimeout(clearInterval, 10000, timer);

function getTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}