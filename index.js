let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    return cats.push(name); 
}
function destructivelyPrependCat(name) {
    return cats.unshift(name); 
}
function destructivelyRemoveLastCat () {
    return cats.pop(); 
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    let newCat = cats.slice(); 
    newCat.push(name); 
    return newCat; 
}
function prependCat(name) {
    let newCat = cats.slice(); 
    newCat.unshift(name); 
    return newCat; 
}
function removeLastCat() {
    let newCat = cats.slice(); 
    newCat.pop(); 
    return newCat; 
}
function removeFirstCat() {
    let newCat = cats.slice(); 
    newCat.shift(); 
    return newCat; 
}