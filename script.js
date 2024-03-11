let box = document.querySelectorAll(".box");
let boxes = Array.from(box);
let newGame = document.querySelector("button[type=reset");
let container = document.querySelector(".game");
let animate_div = document.querySelector(".ppp");
let para = document.querySelector("p");
let h2 = document.querySelector("h2");
let front_page = document.querySelector(".clip");
let img = document.querySelector(".clip img");
let gif_loader = document.querySelector(".gif-loader");

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

function frontclip() {
	setTimeout(() => {
		front_page.style.display = "none";
		gif_loader.style.display = "flex";
		second_display();
	}, 9000);
}
frontclip();

function second_display() {
	setTimeout(() => {
		para.style.display = "block";
		newGame.style.display = "block";
		newGame_disable();
		gif_loader.style.display = "none";
		for (const i of boxes) {
			i.style.display = "block";
		}
	}, 9000);
}

function animate() {
	img.style.display = "none";
	animate_div.style.display = "block";
	setTimeout(() => {
		animate_div.style.display = "none";
		img.style.display = "block";
	}, 4000);
}
animate();

async function tiedGame() {
	win_pattern.map((item) => {
		setInterval(() => {
			let a = boxes[item[0]].innerText;
			let b = boxes[item[1]].innerText;
			let c = boxes[item[2]].innerText;
			if (a == b && b == c) {
				boxes[item[0]].classList.add("scale");
				boxes[item[1]].classList.add("scale");
				boxes[item[2]].classList.add("scale");
			}
			boxes.forEach((element) => {
				if (element.innerText == "X" || element.innerText == "O") {
					newGame_enable();
				}
			});
		}, 100);
	});
}
tiedGame();

newGame.addEventListener("click", (e) => {
	player1 = true;
	h2.innerText = "";
	boxes.map((element, index) => {
		element.style.boxShadow = "none";
		element.disabled = false;
		element.innerText = index * index;
		element.style.color = "#091a32";
		element.classList.remove("scale");
	});
	newGame_disable();
});

function disableBtn(buttons) {
	buttons.forEach((element) => {
		element.disabled = true;
	});
}

async function winner() {
	for (const i of win_pattern) {
		// console.log(i[0], i[1], i[2]);
		// console.log(boxes[i[0]],boxes[i[1]],boxes[i[2]]);
		let checkIndex1 = boxes[i[0]].innerText;
		let checkIndex2 = boxes[i[1]].innerText;
		let checkIndex3 = boxes[i[2]].innerText;
		if (checkIndex1 != "" && checkIndex2 != "" && checkIndex3 != "") {
			if (checkIndex1 == checkIndex2 && checkIndex2 == checkIndex3) {
				disableBtn(boxes);
				if (checkIndex1 == "X") {
					h2.innerText = " ✅ '❌' 💯";
					newGame_enable();
				} else {
					h2.innerText = " ✅ '⭕' 💯";
					newGame_enable();
				}
			}
		}
	}
}

boxes.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (player1) {
			item.innerText = "X";
			item.style.color = "#fff";
			player1 = false;
		} else {
			item.innerText = "O";
			item.style.color = "#fff";
			player1 = true;
		}
		item.disabled = true;
		winner();
	});
});

function newGame_enable() {
	setTimeout(() => {
		newGame.disabled = false;
		newGame.style.color = "#fff";
	}, 1000);
}
function newGame_disable() {
	newGame.disabled = true;
	newGame.style.color = "gray";
}

(function change_color() {
	setInterval(() => {
		boxes.forEach((element) => {
			if (element.innerText == "X" || element.innerText == "O") {
				element.style.boxShadow = "inset 0px 0px 5px 2px green";
			}
		});
	}, 100);
})();
