class Truck {
    constructor(options) {
        this.color = options.color;
        this.wheels = options.wheels;
        this.state = options.state;
    }
}

class Car {
    constructor(options) {
        this.color = options.color;
        this.wheels = options.wheels;
        this.state = options.state;
    }
}


class VehicalFactory {

    createVehical(option) {
        switch (option.type) {
            case 'car':
                return new Car(option);
            case 'truck':
                return new Truck(option);
            default:
                break;
        }
    }
}

var factoty = new VehicalFactory();
var carObj = factoty.createVehical({ type: 'car', color: 'red', wheels: '4', state: 'new' });
var truckObj = factoty.createVehical({ type: 'truck', color: 'red', wheels: '4', state: 'new' });

console.log(carObj === truckObj);