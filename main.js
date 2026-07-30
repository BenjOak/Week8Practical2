// const words = document.getElementsByClassName("writing-area");
const addWord = document.getElementsByTagName("textarea");
let wordCount = 0;
const WORDS_PER_DOG = 10;

for (let word of addWord) {
    word.addEventListener("keyup", function () {
        getWordArray();
        console.log(getWordArray());
        let wordCounter = (getWordArray().length - 1);
        document.getElementById("update-count").innerHTML = `Word Count = ${wordCounter}`
    })
}

function getWordArray() {
    const words = document.getElementById("text").value
    return words.split(" ");
}

function getWordCount() {
    // let wordCount = getWordArray().length
}

const doggyPhoto = document.getElementById("doggy-photo");
//     document.getElementById("image-area").appendChild(document.createElement("p"));

// for (let change of words) {
//     change.addEventListener("keyup", function (event) {
//         // return wordsWritten.value.trim().split(" ").length
//         // const ahhh = JSON.stringify(wordsWritten.value);
//         // localStorage.setItem("Word Count", "" + ahhh + "");
//         let ahh = words.value
//         document.getElementById("image-area").lastChild.innerHTML = + ahh;

//         console.log(ahh);
//     })
// }

function fileType (src) {
    return src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png") || src.endsWith(".gif");
}

async function findAPI() {
    try {
        const result = await fetch("https://random.dog/woof.json");
        const data = await result.json();

        if (!fileType(data.url)) {
            findAPI();
        }
        display(data.url);
    } catch (error) {
        document.getElementById("image-area").appendChild(document.createElement("p"));
        document.getElementById("image-area").lastChild.innerHTML = "Sorry, no doggies to show at the moment :(";
    }

}

// display("/assets/dexter-dawg.jpg")

function display(data) {
    // const parsed = JSON.parse(localStorage.getItem("Doggo"))
    doggyPhoto.src = data;
}

// if (words > 100) {
//     display();
// }

findAPI();