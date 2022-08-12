class AlarmClock{
    constructor(alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined){
            throw new Error("error text");
        }

        if (this.alarmCollection.find(item => item.id === id) !==undefined) {
            console.error("Этот будильник уже существует");
        } else {
            return this.alarmCollection.push({id, time, callback});
        }
    }

    removeClock(id){
        let lengthBefore = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter((item) => item.id !== id);
        let lengthAfter = this.alarmCollection.length;
        return lengthBefore > lengthAfter;
    }

    getCurrentFormattedTime() {
        let time = new Date();
        return time.toLocaleTimeString().slice(0,-3);
    }

    start(){
        const checkClock = (alarm) => {
            if (this.getCurrentFormattedTime() === alarm.time) {
              return alarm.callback();
            }
        }
            if (this.timerId === null) {
            return this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 1000);
    }

}
    stop(){
        if(this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(item => console.log("Будильник №" + item.id + " заведен на " + item.time));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
