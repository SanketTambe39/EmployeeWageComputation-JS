{
    const IS_ABSENT = 0;
    let employeeCheck = Math.floor(Math.random() * 10) % 2;
    if (employeeCheck == IS_ABSENT) {
        console.log("Employee is absent");
    } else {
        console.log("Employee is present");
    }
}