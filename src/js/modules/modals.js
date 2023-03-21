const modals = (modalSelector, triggerSelector, closeSelector) => {
	const modal = document.querySelector(modalSelector),
		trigger = document.querySelectorAll(triggerSelector),
		close = document.querySelector(closeSelector);
	
	const showModal = () => {
		modal.classList.add('show');
		document.body.classList.add('modal-open');

		if (modal.classList.contains('popup')) clearInterval(timeoutId);
	};

	const closeModal = () => {
		modal.classList.remove('show');
		document.body.classList.remove('modal-open');
	};

	trigger.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}
			showModal();
		});
	});

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target == close) {
			closeModal();
		}
	});

	const timeoutId = setTimeout(() => {
		if (modal.classList.contains('popup')) showModal();
	}, 60000);
};

export default modals;