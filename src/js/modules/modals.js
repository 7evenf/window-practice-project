const modals = (modalSelector, triggerSelector, closeSelector, closeClickOverlay = true) => {
	const modal = document.querySelector(modalSelector),
		trigger = document.querySelectorAll(triggerSelector),
		close = document.querySelector(closeSelector),
		windows = document.querySelectorAll('[data-modal]');

	const showModal = () => {
		modal.classList.add('show');
		document.body.classList.add('modal-open');

		clearInterval(timeoutId);
	};

	const closeModal = () => {
		windows.forEach(item => item.classList.remove('show'));

		modal.classList.remove('show');

		document.body.classList.remove('modal-open');
	};
	
	trigger.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}

			windows.forEach(item => item.classList.remove('show'));

			closeModal();
			showModal();
		});
	});

	modal.addEventListener('click', (e) => {
		if ((e.target === modal && closeClickOverlay) || e.target == close) {
			closeModal();
		}
	});	

	const timeoutId = setTimeout(() => {
		if (modal.classList.contains('popup')) showModal();
	}, 60000);
};

export default modals;