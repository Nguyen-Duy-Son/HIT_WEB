const obj = {
    name: "Hưng",
    age: 20,
    email: "dth27902@gamil.com"
};

function run(object) {
    let a = [];
    const objectKeys = Object.keys(object);
    const objectValues = Object.values(object);
    for (let i = 0; i < 3; i++) {
        a[i] = objectKeys[i] + ":" + objectValues[i];
    }
    return a;
}
console.log(run(obj));