const addWord = document.getElementsByTagName("textarea");
let wordCount = 0;
let number = document.getElementById("num").innerHTML;

const WORDS_PER_DOG = 100;


for (let word of addWord) {
    word.addEventListener("load", function () {
        getWordCount();
    })

    word.addEventListener("keyup", function () {
        getWordArray();
        getWordCount();
        document.getElementById("num").innerHTML = wordCount;
        findAPI();
        localStorage.setItem("User Text", word.value);
    })
}

/**Sets the value of the <textarea> to be that of the string saved to localStorage */
if (localStorage.getItem("User Text") !== " ") {
    let savedText = localStorage.getItem("User Text");
    document.getElementById("text").value = savedText;
    getWordCount();
}

/**
 * calling this function turns the string pulled from <textarea> into an array, which can then be used to calculate the word count
 * 
 * @return an array
 */
function getWordArray() {
    let words = document.getElementById("text").value
    words = words.replace(/\s+/g,' '); // collapses consecutive spaces: from https://writtenkitten.co/ source code
    return words.trim().split(" ");
}

function getWordCount() {
    if (getWordArray[0] === "") {
        return wordCount = (getWordArray().length - 1);
    } else return wordCount = (getWordArray().length);
}

const doggyPhoto = document.getElementById("doggy-photo");

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

function display(data) {
    // const parsed = JSON.parse(localStorage.getItem("Doggo"))
    doggyPhoto.src = data;
}

// if (Math.floor(wordCount.length / WORDS_PER_DOG) > Math.floor())