// It is a behavioural design pattern that allows an object to alter its behaviour based on changes to its internal state. 
// The object returned by a State pattern class seems to change its class. It provides state-specific logic to a limited set 
// of objects in which each object type represents a particular state.

class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        console.log('Stop');
    }
}

class YellowLight extends Light {
    constructor() {
        super('Yello');
    }

    sign() {
        console.log('Steady');
    }
}


class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        console.log('Go');
    }
}


class TrafficLight {
    constructor() {
        this.states = [new GreenLight(), new YellowLight(), new RedLight()];
        this.currentState = this.states[0];
    }

    change() {
        const totalStates = this.states.length;
        let currentState = this.states.findIndex(light => light === this.currentState);
        if (currentState + 1 < totalStates) {
            this.currentState = this.states[currentState + 1];
        }
        else {
            this.currentState = this.states[0];
        }
    }

    sign() {
        this.currentState.sign();
    }
}

let tLObj = new TrafficLight();
tLObj.sign();
tLObj.change();
tLObj.sign();
tLObj.change();
tLObj.sign();

