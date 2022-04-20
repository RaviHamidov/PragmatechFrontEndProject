// Inputs
let Students = [{
    Name: 'Eli',
    SurName: 'Piriyev',
    Age: 23
}, {
    Name: 'Ehmed',
    SurName: 'Memmedov',
    Age: 34
}, {
    Name: 'Sara',
    SurName: 'Qurbanova',
    Age: 40
}, {
    Name: 'Sevda',
    SurName: 'Ezizova',
    Age: 58
}, {
    Name: 'Qurban',
    SurName: 'SNameiqzNamee',
    Age: 60
}]

// Expected Output
// Name: Eli, SurName: Piriyev, Age: 23
// Name: Ehmed, SurName: Memmedov, Age: 34
// Code:
for (var i = 0; i < Students.length; i++) {
    console.log("FirstName:" + Students[i]['Name'] + ", LastName:" + Students[i]['SurName'] + ", Ages:" + Students[i]['Age']);
}