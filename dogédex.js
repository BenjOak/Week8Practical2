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

for(let i = 0; i < (rows[1]); i++) {
    const child = document.createElement("button");
    child.style.grid = `${i}/${i}`
    child.style.width = "25%";
    child.style.maxWidth = "100px"
    child.style.padding = "100px";
    child.className = `profile ${i}`;
    child.style.borderRadius = "1vw";
    element.appendChild(child);
}

// for(let i = 0; i < columns[1]; i++) {
//     const child = document.createElement("button")
//     child.style.grid = `${i}/${i}`;
//     child.style.width = "25%";
//     child.style.maxWidth = "100px"
//     child.style.padding = "100px";
//     child.className = `profile ${i}`;
//     child.style.margin = "auto"
//     element.appendChild(child);
// }

const length = element.children.length;
console.log(length);

// const profile = document.getElementsByClassName("profile 1");
// profile.style.backgroundImage = "url('assets/dexter-dawg.jpg')"



for(let i = 0; i < length; i++) {
    const profile = document.getElementsByClassName(`profile ${i}`)
    const child = document.createElement("img");
    child.src = "/assets/dexter-dawg.jpg";
    child.width = "100%";
    child.height = "100%";
    console.log(profile)
    profile.appendChild(child);

}