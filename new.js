// function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//     return { days, hours, mins, secs }
// }
// function pad(value) {
//     return String(value).padStart(2, '0')
// }


// const refs = {
//     days: document.querySelector('span[data-value="days"]'),
//     hours: document.querySelector('span[data-value="hours"]'),
//     mins: document.querySelector('span[data-value="mins"]'),
//     secs: document.querySelector('span[data-value="secs"]'),
//     label: document.querySelectorAll('.label')
// }
// function updateTime(object) {
//     refs.days.textContent = object.days;
//     refs.hours.textContent = object.hours;
//     refs.mins.textContent = object.mins;
//     refs.secs.textContent = object.secs
// }

// const timer = {
//     start() {
//         const date = new Date(2021, 5, 23, 23, 26, 40, 0).getTime();
//         setIntervalId = setInterval(() => {
           
//              const dateStar = new Date().getTime()
//             const deltaTime = date - dateStar
//             const deltaTimeObj = getTimeComponents(deltaTime);
//             updateTime(deltaTimeObj)
            
//             if (deltaTime < 0) {
//                 clearInterval(setIntervalId)
//                 refs.days.textContent = '00'
//                 refs.hours.textContent = '00'
//                 refs.mins.textContent = '00'
//                 refs.secs.textContent = '00'
//             }
//         }, 1000);
//     }
// }
// timer.start()