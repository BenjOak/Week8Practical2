const addWord = document.getElementsByTagName("textarea");
let wordCount = 0;
let number = document.getElementById("num").innerHTML;

const WORDS_PER_DOG = 100;

/**Changes the wordCount, updates the localStorage with the user's text, and calls the getWords() function every time a key is released */
for (let word of addWord) {
    word.addEventListener("keyup", function () {
        getWords();
        document.getElementById("num").innerHTML = wordCount;
        localStorage.setItem("User Text", word.value);
    })
}

/**Sets the value of the <textarea> to be that of the string saved to localStorage */
if (localStorage.getItem("User Text") !== " ") {
    let savedText = localStorage.getItem("User Text");
    document.getElementById("text").value = savedText;
}

function getWords() {
    let words = document.getElementById("text").value;
    words = words.replace(/\s+/g," ");
    words = words.trim().split(" ");
    if (Math.floor(words.length / WORDS_PER_DOG) > Math.floor(wordCount / WORDS_PER_DOG)) {
        petThatDog();
    }
    wordCount = words.length;
    document.getElementById("count-down").innerHTML = `Words until next dog = ${WORDS_PER_DOG - wordCount % WORDS_PER_DOG }`
}


function fileType (src) {
    return src.endsWith(".jpg") || src.endsWith(".jpeg") || src.endsWith(".png") || src.endsWith(".gif");
}

async function petThatDog() {
    try {
        const result = await fetch("https://random.dog/woof.json");
        const data = await result.json();

        if (!fileType(data.url)) {
            petThatDog();
        }
        let number = document.getElementById("num").innerHTML;
        if (number > (WORDS_PER_DOG)-1) {
            display(data.url);
            document.getElementById("pre-100").style.display = "none";
        }
    } catch (error) {
        document.getElementById("image-area").appendChild(document.createElement("p"));
        document.getElementById("image-area").lastChild.innerHTML = "Sorry, no doggies to show at the moment :(";
        document.getElementById("pre-100").style.display = "none";
    }
}

const doggyPhoto = document.getElementById("doggy-photo");

function display(data) {
    // const parsed = JSON.parse(localStorage.getItem("Doggo"))
    doggyPhoto.src = data;
}
