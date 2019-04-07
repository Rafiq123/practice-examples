class Employee {
    constructor(name, id, age, phone) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.phone = phone;
        this.getName = function () {
            return this.name;
        }
    }
}

// function Employee(name, id, age, phone) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.phone = phone;
//     this.getName = function () {
//         return this.name;
//     }
// }

var eObj = new Employee('test', '1223', 29, 7897);
console.log(eObj.getName())
console.log(eObj);