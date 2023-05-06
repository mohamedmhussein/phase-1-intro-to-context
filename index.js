// Your code here
function createEmployeeRecord(recordsArray){
    return {
        firstName: recordsArray[0],
        familyName: recordsArray[1],
        title: recordsArray[2],
        payPerHour: recordsArray[3],
        timeInEvents: [],
        timeOutEvents:[]
    }
}
function createEmployeeRecords(array){
    let newArray = []
    let i = 0
    for (let element of array){
        newArray[i] = createEmployeeRecord(element)
        i++
    }
    return newArray

}

function createTimeInEvent(employeeRecord, time){
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.substr(11, 4)),
        date: time.substr(0, 10)
    })

    return employeeRecord
}

function createTimeOutEvent(employeeRecord, time){
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time.substr(11, 4)),
        date: time.substr(0, 10)
    })

    return employeeRecord
}

function hoursWorkedOnDate(employeeRecord, inputDate){
    let hoursWorked = 0
    for (let i = 0; i < employeeRecord.timeInEvents.length; i++){
        if (employeeRecord.timeInEvents[i].date === inputDate){
            hoursWorked = ((employeeRecord.timeOutEvents[i].hour)-(employeeRecord.timeInEvents[i].hour))/100
            break
        }
    }
    return hoursWorked
}

function wagesEarnedOnDate(employeeRecord, inputDate){
    return hoursWorkedOnDate(employeeRecord, inputDate)*employeeRecord.payPerHour
}

function allWagesFor(employeeRecord){
    let pay = 0
    for (let i = 0 ; i < employeeRecord.timeInEvents.length; i++){
        pay += wagesEarnedOnDate(employeeRecord, employeeRecord.timeInEvents[i].date)
    }
    return pay
    
}

function calculatePayroll(array){
    let pay = 0
    for (let employeeRecord of array){
        pay += allWagesFor(employeeRecord)
    }
    return pay
}
