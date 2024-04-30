let a;
let b;
let h;
let j;

a = +prompt("Birinchi sonni yozing...");
b = +prompt("Ikkinchi sonni yozing...");
h = +prompt("Amalni tanlang: \n 1. + \n 2. - \n 3. * \n 4. /");

if (h === 1) {
    j = a + b;
    alert(j);
} else if (h === 2) {
    j = a - b;
    alert(j);
} else if (h === 3) {
    j = a * b;
    alert(j);
} else if (h === 4) {
    j = a / b;
    alert(j);
}
