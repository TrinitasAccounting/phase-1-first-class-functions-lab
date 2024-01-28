// Code your solution in this file!



// const returnFirstTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

// const returnLastTwoDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
}

// const selectingDrivers = () => {
//     let newArray = []
//     firstTwoDrivers = returnFirstTwoDrivers();
//     lastTwoDrivers = returnLastTwoDrivers();
//     newArray = [...firstTwoDrivers, ...lastTwoDrivers];
//     return newArray;
// }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const multiplyByFour = (num1) => {
//     return num1 * 4;
// }

// const createFareMultiplier = (num1) => {
//     return multiplyByFour(num1);
// }


const createFareMultiplier = function (num1) {
    return function (value) {
        return value * num1
    };
}


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


const selectDifferentDrivers = (arrayOfDrivers, func) => {
    return func(arrayOfDrivers);
}