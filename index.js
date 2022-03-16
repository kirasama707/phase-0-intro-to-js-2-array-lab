
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);
function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyAppendCat(Ralph) {
    cats.push('Ralph');
}
function destructivelyPrependCat(bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function  destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
    
}

function prependCat(name) {
    const anotherCat = cats.slice();
    anotherCat.unshift(name);
    return anotherCat;
}

function removeLastCat() {
    const damnCat = cats.slice();
    damnCat.pop()
    return damnCat;
}

function removeFirstCat() {
    const stupidCat = cats.slice();
    stupidCat.shift();
    return stupidCat;
}