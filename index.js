// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name){
const driverNames = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
return driverNames

}

// findMatching(drivers, 'Bobby')
// you were matching a whole name with 1 letter 
function fuzzyMatch(drivers, name){
    const driverNames = drivers.filter(driver => driver.charAt(0) === name.charAt(0))
    return driverNames 
}

// fuzzyMatch(drivers, 'Susan')


function matchName(drivers, string){
    const nameChecker = drivers.filter(driver => driver.name === string)
    return nameChecker
}

// matchName(drivers, 'Bobby')
