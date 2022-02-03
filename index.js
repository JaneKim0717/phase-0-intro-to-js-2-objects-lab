// // Write your solution in this file!
// const employee = {
//     name: "Indy",
//     streetAddress: "1234 Main Street",
// }
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const newEmployee = {...employee};
//     newEmployee[key] = value;
//     return newEmployee;
// }
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// }
// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// }

const employee = {
    name: "Indy",
    streetAddress: "1617 Doodle Land",
}

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

// function updateEmployeeWithKeyAndValue (employee, key, value) {
//     return {
//         ...employee,
//         [key]: value,
//     };
// }

// const newEmployee = updateEmployeeWithKeyAndValue (employee, "name", "Dr. Jones")


// console.log (employee);
// console.log (newEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}

// const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue (employee, "name", "Mr.Mop")

// console.log(employee);
// console.log(newEmployee);

function deleteFromEmployeeByKey (employee, key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

// const newEmployee = deleteFromEmployeeByKey (employee, "name");

// console.log (employee);
// console.log (newEmployee);

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}

// destructivelyDeleteFromEmployeeByKey (employee, "name");

// console.log (employee);