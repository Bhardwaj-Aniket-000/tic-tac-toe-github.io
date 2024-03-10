let boxes = document.querySelectorAll(".box");
let btn = document.querySelector("button[type=button");
let newGame = document.querySelector("button[type=reset");
let container = document.querySelector(".game");
let animate_div = document.querySelector(".ppp");
let para = document.querySelector("p");
let h2 = document.querySelector("h2");
let select = document.querySelector("select");

let player1 = true;

let win_pattern = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function tiedGame() {
	boxes.forEach((element) => {
		setInterval(() => {
			if (element.innerText == "" || element.innerText == "") {
				element.style.boxShadow = "0px 0px 5px 2px red";
			} else {
				element.style.boxShadow = "0px 0px 5px 2px green";
			}
		}, 200);
	});
}
tiedGame();

btn.addEventListener("click", () => {
	animate_div.style.display = "block";
	animate_div.style.left = "45%";
	btn.style.display = "none";
	setTimeout(() => {
		boxes.forEach((element) => {
			element.style.display = "block";
			animate_div.style.display = "none";
			h2.style.visibility = "visible";
			para.style.display = "block";
			newGame.style.display = "block";
		});
	}, 2000);
});

newGame.addEventListener("click", (e) => {
	player1 = true;
	h2.innerText = "";
	boxes.forEach((element) => {
		element.disabled = false;
		element.innerText = "";
	});
});

function disableBtn(buttons) {
	buttons.forEach((element) => {
		element.disabled = true;
		element.style.boxShadow = "0px 0px 5px 1px green";
	});
}

function winner() {
	for (const i of win_pattern) {
		// console.log(i[0], i[1], i[2]);
		// console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);
		let checkIndex1 = boxes[i[0]].innerText;
		let checkIndex2 = boxes[i[1]].innerText;
		let checkIndex3 = boxes[i[2]].innerText;
		if (checkIndex1 != "" && checkIndex2 != "" && checkIndex3 != "") {
			if (checkIndex1 == checkIndex2 && checkIndex2 == checkIndex3) {
				disableBtn(boxes);
				if (checkIndex1 == "x") {
					h2.innerText = " ✅✅💯 congrats, winner is '❌'";
				} else {
					h2.innerText = " ✅✅💯 congrats, winner is '⭕'";
				}
			}
		}
	}
}

boxes.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (player1) {
			item.innerText = "X";
			player1 = false;
		} else {
			item.innerText = "O";
			player1 = true;
		}
		item.disabled = true;
		winner();
	});
});
