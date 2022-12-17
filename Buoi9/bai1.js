function Isprime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0)
            return false;
    }
    return true;
}
console.log(Isprime(10));