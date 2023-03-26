export const closeModal = () => {
	const	windows = document.querySelectorAll('[data-modal]');

	windows.forEach(item => item.classList.remove('show'));

	document.body.classList.remove('modal-open');
	document.body.style.marginRight = '0px';
};

const modals = (modalState) => {
	const setModal = (modalSelector, triggerSelector, closeSelector, closeClickOverlay = true) => {
		const modal = document.querySelector(modalSelector),
			trigger = document.querySelectorAll(triggerSelector),
			close = document.querySelector(closeSelector),
			scroll = calcScroll();
		
		const showModal = () => {
			modal.classList.add('show');
			document.body.classList.add('modal-open');
			document.body.style.marginRight = `${scroll}px`;

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

		function calcScroll() {
			const block = document.createElement('div');

			block.style.width =  '50px';
			block.style.height = '50px';
			block.style.overflowY = 'scroll';
			block.style.visibility = 'hidden';

			document.body.append(block);
		
			let widthScroll = block.offsetWidth - block.clientWidth;
			block.remove();

			return widthScroll;
		}
		
	};

	setModal('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close strong');
	setModal('.popup', '.phone_link', '.popup .popup_close strong');
	setModal('.popup_calc', '.popup_calc_btn', '.popup_calc_close strong');
	setModal('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close strong', false);
	setModal('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close strong', false);
};

export default modals;