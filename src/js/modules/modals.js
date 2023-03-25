export const closeModal = () => {
	const	windows = document.querySelectorAll('[data-modal]');

	windows.forEach(item => item.classList.remove('show'));

	document.documentElement.classList.remove('modal-open');
};

const modals = (modalSelector, triggerSelector, closeSelector, modalState, closeClickOverlay = true) => {
	const modal = document.querySelector(modalSelector),
		trigger = document.querySelectorAll(triggerSelector),
		close = document.querySelector(closeSelector);

	const showModal = () => {
		modal.classList.add('show');
		document.documentElement.classList.add('modal-open');

		clearInterval(timeoutId);
	};
	
	trigger.forEach(item => {
		item.addEventListener('click', (e) => {
			if (e.target) {
				e.preventDefault();
			}

			if (modal.classList.contains('popup_calc_profile')) {
				if (Object.values(modalState).length < 3) return;
			} else if (modal.classList.contains('popup_calc_end')) {
				if (Object.values(modalState).length < 5) return;
			}
			

			closeModal(modalSelector, '[data-modal]');
			showModal();
		});
	});

	modal.addEventListener('click', (e) => {
		if ((e.target === modal && closeClickOverlay) || e.target == close) {
			closeModal(modalSelector, '[data-modal]');
		}
	});	

	const timeoutId = setTimeout(() => {
		if (modal.classList.contains('popup')) showModal();
	}, 60000);
};

export default modals;