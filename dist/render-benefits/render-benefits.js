import { benefits } from "../data/benefits.js";
const renderBenefits = data => {
	const leftColumn = document.getElementById("left_benefit_items");
	if (!leftColumn) throw new Error("Cant find container");
	leftColumn.classList.add("benefit__resume-group");
	const rightColumn = document.getElementById("right_benefit_items");
	if (!rightColumn) throw new Error("Cant find container");
	rightColumn.classList.add("benefit__resume-group");
	data.forEach((benefit, index) => {
		const benefitItem = `
			<div class="benefit__item">
				<div class="benefit__item-header">
					<div class="benefit__item-circle">
						<img src="${benefit.icon}" class="benefit__item-icon" />
					</div>
					<div class="benefit__item-header-title">
						<h3>${benefit.title}</h3>
						<p>${benefit.description}</p>
					</div>
				</div>
				<p class="benefit__item-description">${benefit.info}</p>
			</div>
		`;
		if (index < 2) {
			leftColumn.innerHTML += benefitItem;
		} else {
			rightColumn.innerHTML += benefitItem;
		}
	});
};
renderBenefits(benefits);
