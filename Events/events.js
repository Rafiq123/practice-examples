class Event {
    constructor() {
        this.event = {};
    }

    on(eventName, callback) {
        if(this.event[eventName]){
            this.event[eventName].push(callback);
        }
        else{
            this.event[eventName] = [callback];
        }
    }

    trigger(eventName){
        if(this.event[eventName]){
            for (let cb of this.event[eventName]){
                cb();
            }
        }
    }

    off(eventName){
        delete this.event[eventName];
    }
}