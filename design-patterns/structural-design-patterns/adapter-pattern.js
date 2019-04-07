// This pattern is often used to create wrappers for new refactored APIs so that other existing old APIs 
// can still work with them. This is usually done when new implementations or code refactoring 
// (done for reasons like performance gains) result in a different public API while the other parts 
// of the system are still using the old API and hence needs to be adapted to work together.




class OldCalculator {
    constructor() {
        this.operations = function (num1, num2, operator) {
            switch (operator) {
                case 'add':
                    return num1 + num2;
                    break;
                case 'sub':
                    return num1 - num2;
                    break;
                default:
                    break;
            }
        }
    }
}

class NewCalculator {
    constructor() {
        this.add = function (num1, num2) {
            return num1 + num2;
        }
        this.sub = function (num1, num2) {
            return num1 - num2;
        }
    }
}

class AdaptorCalculator {
    constructor() {
        this.operations = function (num1, num2, operator) {
            var newCalc = new NewCalculator();
            switch (operator) {
                case 'add':
                    return newCalc.add(1, 2);
                    break;
                case 'sub':
                    return newCalc.add(1, 2);
                    break;
                default:
                    break;
            }
        }
    }
}

var oldCalObj = new OldCalculator();
console.log(oldCalObj.operations(1, 2, 'add'));

var newCalObj = new NewCalculator();
console.log(newCalObj.add(1, 2));

var adObj = new AdaptorCalculator();
console.log(adObj.operations(1, 2, 'add'));

