class SingleTon {
    constructor(data) {
        if (SingleTon.exists) {
            return SingleTon.instance;
        }
        this.data = data;
        SingleTon.instance = this;
        SingleTon.exists = true;
    }

    getData() {
        return this._data;
    }

    setData(data) {
        this._data = data;
    }
}

// usage
const obj1 = new SingleTon('test');
console.log(obj1.getData()); // mongo

const obj2 = new SingleTon('test2');
console.log(obj2.getData()); // mongo