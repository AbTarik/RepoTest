
function greet(name) {
    console.log(`Hello ${name}`);
}

const names = ["John","Lea","Andrea","Garry"];

for(let i in names) {
    greet(names[i]);
}
