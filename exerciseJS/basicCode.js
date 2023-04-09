
let number = 10
let n1 = 0, n2 = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    // console.log("nextTerm: " + nextTerm);
    n1 = n2;
    // console.log("n1: " + n1);
    n2 = nextTerm;
    // console.log("n2: " + n2);
}