const notifyHolders = document.querySelectorAll(
	".notificationsHolder > .notification"
);
const buttonAllRead = document.querySelector(".markButton");

function allRead() {
	for (let i = 0; i < notifyHolders.length; i++) {
		let numbersNoti = document.querySelector(".numbersNoti");
		if (notifyHolders[i].classList.contains("unread")) {
			notifyHolders[i].classList.remove("unread");
			numbersNoti.innerHTML = `0`;
		}
	}
}

for (let j = 0; j < notifyHolders.length; j++) {
	notifyHolders[j].addEventListener("click", () => {
		const notifyHoldersUnRead = document.querySelectorAll(
			".notificationsHolder > .notification.unread"
		);
		let numberUnRead = parseFloat(notifyHoldersUnRead.length);
		let numbersNoti = document.querySelector(".numbersNoti");
		let toNumber = parseFloat(numbersNoti.innerHTML);
		if (notifyHolders[j].classList.contains("unread")) {
			notifyHolders[j].classList.remove("unread");
			numbersNoti.innerHTML = `${numberUnRead - 1}`;
		}
		console.log(numberUnRead - 1);
	});
}

buttonAllRead.addEventListener("click", allRead);
