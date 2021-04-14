window.addEventListener("load", () => {
	setTimeout(splashOut, 2000);
})
function splashOut () {
	let splash = document.querySelector(".splash-screen");
	splash.classList.add("splash-screen-out");
	setTimeout(() => {
		splash.className = "splash-screen-none";
	} , 500, splash)
}
