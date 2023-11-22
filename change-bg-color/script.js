const button = document.querySelector("#change-color-button");
const colorChangeDiv = document.querySelector("#color-change-div");

const getRandomColor = () => {
	let color = "#";
	const alphaNum = "0123456789ABCDEF";
	for (let i = 0; i < 6; i++) {
		color += alphaNum[Math.floor(Math.random() * 16)];
	}

	return color;
};

button.addEventListener("click", () => {
	const randomColor = getRandomColor();
	colorChangeDiv.style.backgroundColor = randomColor;
});
