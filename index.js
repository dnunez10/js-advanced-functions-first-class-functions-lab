const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = () => drivers.slice(0, 2)

const returnLastTwoDrivers = () => drivers.slice(2)

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    return function (fare) {
        return (int * fare)
    }
}

function fareDoubler(num){
    return num * 2
}
const xx = fareDoubler()

function fareTripler(num){
    return num * 3
}
const xxx = fareTripler()

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return drivers, returnFirstTwoDrivers()
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return drivers, returnLastTwoDrivers()
}