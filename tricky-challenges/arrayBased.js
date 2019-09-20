//given an array of numbers which are sorted and given a sum of two number, your function should return which numbers contribute to form 
//this sum when added
//[1,2,3,4,4] , sum = 8 
//should return 4,4


function findNumbersOfSum(data, sum) {
    let result = [];
    function findNumbers(i, j, sum) {
        console.log(data[i] + '+' + data[j]);
        let res = data[i] + data[j];

        if (res === sum) {
            let items = [];
            items.push(data[i]);
            items.push(data[j]);
            result.push(items);
            i++;
            if (i !== j) {
                findNumbers(i, j, sum);
            }
        }
        else if (res < sum) {
            i++;
            findNumbers(i, j, sum);
        }
        else if (res > sum) {
            j--;
            findNumbers(i, j, sum);
        }
    }
    findNumbers(0, data.length - 1, sum);
    return result;
}

let a = [1, 4, 5, 8, 9, 10];
console.log(findNumbersOfSum(a, 13));