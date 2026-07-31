// const words = document.getElementsByClassName("writing-area");
const addWord = document.getElementsByTagName("textarea");
let wordCount = 0;
let number = document.getElementById("num").innerHTML;

const WORDS_PER_DOG = 100;

for (let word of addWord) {
    word.addEventListener("keyup", function () {
        getWordArray();
        getWordCount();
        document.getElementById("num").innerHTML = wordCount;
        console.log(wordCount);
        findAPI();
    })
}

function getWordArray() {
    let words = document.getElementById("text").value
    words = words.replace(/\s+/g,' '); // collapses consecutive spaces: from https://writtenkitten.co/ source code
    return words.trim().split(" ");
}

function getWordCount() {
    return wordCount = (getWordArray().length - 1);
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
        let number = document.getElementById("num").innerHTML;
        if (number > WORDS_PER_DOG) {
            display(data.url);
            document.getElementById("pre-100").style.display = "none";
        }
    } catch (error) {
        document.getElementById("image-area").appendChild(document.createElement("p"));
        document.getElementById("image-area").lastChild.innerHTML = "Sorry, no doggies to show at the moment :(";
        document.getElementById("pre-100").style.display = "none";
    }

}

// display("/assets/dexter-dawg.jpg")

function display(data) {
    // const parsed = JSON.parse(localStorage.getItem("Doggo"))
    doggyPhoto.src = data;
}

// if (Math.floor(wordCount.length / WORDS_PER_DOG) > Math.floor())