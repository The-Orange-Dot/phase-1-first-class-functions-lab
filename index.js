// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = () => {
  let newDriver = drivers.slice(0,2);
  return newDriver;
}

const returnLastTwoDrivers = () => {
  let newDriver = drivers.slice(2);
  return newDriver;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

console.log(returnFirstTwoDrivers())
console.log(returnLastTwoDrivers())
console.log(selectingDrivers)

let input = 2

function createFareMultiplier(input) {
  return () => input * 5
}

const fareDoubler = (input) => input * 2

const fareTripler = (input) => input * 3

function selectDifferentDrivers(drivers, selectingDrivers) {
 return drivers.map(selectingDrivers)[1]
}


console.log(createFareMultiplier(2))
console.log(fareDoubler(2))
console.log(fareTripler(2))
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))