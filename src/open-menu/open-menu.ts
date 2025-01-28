const handleOpenMenu = (): void => {
	const menu: HTMLElement | null = document.getElementById("menu");

	if (menu === null) throw new Error("Menu is null");

	menu.classList.add("open");
};

const handleCloseMenu = (): void => {
	const menu: HTMLElement | null = document.getElementById("menu");

	if (menu === null) throw new Error("Menu is null");

	menu.classList.remove("open");
};

document.addEventListener("DOMContentLoaded", () => {
	const openButton = document.getElementById("open_menu");
	const closeButton = document.getElementById("close_menu");

	if (openButton) {
		openButton.addEventListener("click", handleOpenMenu);
	}
	if (closeButton) {
		closeButton.addEventListener("click", handleCloseMenu);
	}
});
