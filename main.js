class CountdownTimer {
    constructor(date) {
        this.date = date//new Date(2022, 5, 30, 00, 19, 40, 0).getTime();
        
    }
   
    start() {
        let setIntervalId;
       
        //const date = new Date(2022, 5, 30, 00, 19, 40, 0).getTime();
        setIntervalId = setInterval(() => {
          
             const dateStar = new Date().getTime()
            const deltaTime = this.date - dateStar
            const deltaTimeObj = this.getTimeComponents(deltaTime);
            this.updateTime(deltaTimeObj)
            
            if (deltaTime < 0) {
                const links = this.takeslinks()
                clearInterval(setIntervalId)
                links.days.textContent = '00'
                links.hours.textContent = '00'
                links.mins.textContent = '00'
                links.secs.textContent = '00'
            }
        }, 1000);
    }
      getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs }
}
   pad(value) {
    return String(value).padStart(2, '0')
    }
     takeslinks() {
       return ({
            days: document.querySelector('span[data-value="days"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            secs: document.querySelector('span[data-value="secs"]'),
            label: document.querySelectorAll('.label')
        })
}
     updateTime(object) {
        const links = this.takeslinks()
        
      
        links.days.textContent = `${object.days}`;
        links.hours.textContent = `${object.hours}`;
        links.mins.textContent = `${object.mins}`;
        links.secs.textContent = `${object.secs}`
}
}

const timer = new CountdownTimer({
    date: new Date(2023, 5, 30, 00, 19, 40, 0).getTime()

})
console.log(timer.start());

// function updateTime(object) {
//         const links = this.takeslinks()
//         console.log(links);
      
//         links.days.textContent = `${object.days}`;
//         links.hours.textContent = `${object.hours}`;
//         links.mins.textContent = `${object.mins}`;
//         links.secs.textContent = `${object.secs}`
// }
// function takeslinks() {
//     return ({
//         days: document.querySelector('span[data-value="days"]'),
//         hours: document.querySelector('span[data-value="hours"]'),
//         mins: document.querySelector('span[data-value="mins"]'),
//         secs: document.querySelector('span[data-value="secs"]'),
//         label: document.querySelectorAll('.label')
//     })
// }

//      function getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//     return { days, hours, mins, secs }
// }
// function pad(value) {
//     return String(value).padStart(2, '0')
//     }

// console.log(takeslinks());

// const obj = (getTimeComponents(60000000000))
// console.log(updateTime(obj));