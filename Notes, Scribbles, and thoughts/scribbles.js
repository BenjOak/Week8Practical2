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

const WORDS_PER_DOG = 100;
let wordCount = 0;

function getWords() {
    let words = document.getElementById("text").value;
    words = words.replace(/\s+/g," ");
    words = words.trim().split(" ");
    if (Math.floor(words.length / WORDS_PER_DOG) > Math.floor(wordCount / WORDS_PER_DOG)) {
        findAPI();
    }
    wordcount = words.length;
}