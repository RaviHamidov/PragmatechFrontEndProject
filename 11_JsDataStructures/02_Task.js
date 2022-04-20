// Inputs
let FirstName = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let LastName = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let Ages = [23, 34, 40, 58, 60];
let Students = {
    Names: FirstName,
    SurNames: LastName,
    Ages: Ages
}

// Expected Output
// FirstName: Eli, LastName: Piriyev, Age: 23
// FirstName: Ehmed, LastName: Memmedov, Age: 34
// Code:
for (var i = 0; i < FirstName.length; i++) {
    console.log("FirstName:" + Students['Names'][i] + ", LastName:" + Students['SurNames'][i] + ", Ages:" + Students['Ages'][i]);
}
