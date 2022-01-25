setInterval(setTime, 1000);

const secondHand = document.querySelector('.hand-second');
const minuteHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setTime () {
    const currentTime = new Date();
    let currentSecond = currentTime.getSeconds();
    let currentMinute = currentTime.getMinutes();
    let currentHour = currentTime.getHours()%12 ;
    secondHand.style.transform = `translateX(-50%) rotate(${currentSecond*6}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${(currentMinute + currentSecond/60)*6}deg)`;
    hourHand.style.transform = `translateX(-50%) rotate(${(currentHour + currentMinute / 60)*30}deg)`;
}
setTime();