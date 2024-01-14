// Code your solution here
function findMatching(array, strQuery) {
    let caseInsensitiveCheck = strQuery.toLowerCase()

    const matchingDrivers = array.filter(function (name) {
        return name.toLowerCase() === caseInsensitiveCheck
    })
    return matchingDrivers
}

function fuzzyMatch(array, strQuery) {
    const matchingDrivers = array.filter(function (names) {
        return names.startsWith(strQuery)
    })
    return matchingDrivers
}

function matchName(array, strQuery) {

    const homeTown = array.filter(function (driver) {
        return driver.name === strQuery
    })
    return homeTown
}