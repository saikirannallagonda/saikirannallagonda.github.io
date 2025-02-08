"use strict";

const pasteButton = document.getElementById('paste-button');
const inputSentence = document.getElementById('input-sentence');
const clearButton = document.getElementById('clear-button');
const correctedSentence = document.getElementById('corrected-sentence');
const copyButton = document.getElementById('copy-button');

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

function handleInputSentence(event) {
    const sentence = event.target.value;
    puter.ai.chat(`You are a highly skilled language expert, specializing in transforming informal language into formal, grammatically impeccable English. Your task is to rewrite the given sentence into a formal version that is suitable for professional or academic contexts. Maintain the original meaning as closely as possible while adhering to the conventions of formal English. Only output the rewritten, formal sentence. Sentence: ${sentence}`)
        .then(function (response) {
            correctedSentence.innerHTML = response;
            copyButton.style.display = 'initial';
        }).catch(function (error) {
            correctedSentence.innerHTML = error;
        });
}

async function copyToClipboard(textToCopy) {
    const copyMessage = document.getElementById("copy-message");
    try {
        await navigator.clipboard.writeText(textToCopy);
        copyMessage.textContent = "Copied!";
        setTimeout(() => {
            copyMessage.textContent = "Copy";
        }, 3000);
    } catch (err) {
        console.error("Failed to copy: ", err);
        copyMessage.textContent = "Failed to Copy";
        setTimeout(() => {
            copyMessage.textContent = "Copy";
        }, 3000);
    }
}

inputSentence.addEventListener('input', debounce(handleInputSentence, 2000));

pasteButton.addEventListener('click', () => {
    navigator.clipboard.readText()
        .then(clipText => {
            inputSentence.value = clipText;
            const inputEvent = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            inputSentence.dispatchEvent(inputEvent);
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
});

clearButton.addEventListener('click', () => {
    inputSentence.value = '';
});

copyButton.addEventListener('click', () => {
    copyToClipboard(correctedSentence.innerText);
});