const $text = document.querySelector(".text")

const letters = [
    "콘크리트 빌딩 숲 속 또다른 숲",
    "콘크리트 빌딩 숲 속 또다른 숲",
    "콘크리트 빌딩 숲 속 또다른 숲"
];

const speed = 100;
let i = 0;

const typing = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift();
    }

    await wait(1200);

    remove();
}

const remove = async () => {
    const letter = letters[i].split("");

    while (letter.length) {
        await wait(speed);

        letter.pop();
        $text.innerHTML = letter.join("");
    }

    i = !letters[i+1] ? 0 : i + 1;
    typing();
}

function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
}

setTimeout(typing, 1500);