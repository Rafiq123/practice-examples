class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    increement() {
        const color = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'grey'];
        this.number++;
        this.color = color[Math.floor(Math.random() * color.length)];
        this.notifyObservers();
    }

    addObservers(o) {
        this.observers.push(o);
    }

    notifyObservers() {
        for (let o of this.observers) {
            o.update(this);
        }
    }

}