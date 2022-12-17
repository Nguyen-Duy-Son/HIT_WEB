var courses = ['C++', 'Java', 'Javascript'];

function AddCourse(arr, value) {
    arr.push(value);
}
AddCourse(courses, 'Go');
console.log(courses);

function getFirstElement(coursess) {
    return coursess[0];
}
// var result1 = joinArr(courses, ",");
// var result2 = joinArr(courses, " * ");
console.log(getFirstElement(courses));

function chuoi(x, k) {
    let length = x.length;
    let result = "";
    for (let i = 0; i < length - 1; i++) {
        result += x[i] + k;
    }
    if (length) result += x[length - 1];
    return result;
}
console.log(chuoi(courses, ","));
console.log(chuoi(courses, " * "));