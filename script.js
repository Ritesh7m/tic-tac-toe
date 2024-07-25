let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".btn");
let new_btn = document.querySelector(".new_btn");
let msgContainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turn0 = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0 === true) {
            box.innerHTML = "O";
            box.classList.add("o");
            turn0 = false;
        } else {
            box.innerHTML = "X";
            box.classList.add("x");
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const resetGame = () => {
    turn0 = true;
    enableBoxes();

}
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulation,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw = () => {
    msg.innerText = "Match Draw";
    msgContainer.classList.remove("hide");
}

const checkwinner = () => {
    let allFilled = true;
    for (let pattern of win) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });
    if (allFilled) {
        showDraw();
        disableBoxes();
    }
};

new_btn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);





