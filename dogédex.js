const element = document.getElementById("dog-table");
const cssObj = window.getComputedStyle(element, null);
console.log(cssObj.getPropertyValue("grid-template-rows"));
let rows = cssObj.getPropertyValue("grid-template-rows");
rows = rows.replace(/[+\s\(\)-,]/g," ");
rows = rows.trim().split(" ");
console.log(rows[1]);

let columns = cssObj.getPropertyValue("grid-template-columns");
columns = columns.replace(/[+\s\(\)-,]/g," ");
columns = columns.trim().split(" ");
console.log(columns[1]);

for(let i = 0; i < rows[1]; i++) {
    const child = document.createElement("button")
    document.getElementById("dog-table").appendChild(child);
    
}

for(let x = 0; x < columns[1]; x++) {
    const child = document.createElement("button")
    document.getElementById("dog-table").appendChild(child);
}