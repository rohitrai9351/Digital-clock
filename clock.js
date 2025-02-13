
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds())

function clock(){
    const date = new Date();
    document.querySelector('.hour').innerHTML = String(date.getHours()).padStart(2 , '0') +'hr';
    document.querySelector('.minute').innerHTML = String(date.getMinutes()).padStart(2 , '0') +'min';
    document.querySelector('.second').innerHTML = String(date.getSeconds()).padStart(2 , '0') + 'sec';
    

}
clock()
let intervalId = setInterval(clock , 1000);
let isRunning = false

document.querySelector('.clock').addEventListener('click' , ()=> {
    if(!isRunning){
        clearInterval(intervalId);
        document.querySelector('.clock').innerHTML = 'start'
        isRunning =true
    }
    else{
        intervalId = setInterval(clock , 1000);
        document.querySelector('.clock').innerHTML = 'stop'

        isRunning = false
    }
})