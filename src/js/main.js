import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const modalState = {
		form: 0,
		type: 'tree'
	};

	changeModalState(modalState);
	modals('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close strong');
	modals('.popup', '.phone_link', '.popup .popup_close strong');
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active', '.glazing_block > a');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	forms('form', 'input', modalState);
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
	modals('.popup_calc', '.popup_calc_btn', '.popup_calc_close strong');
	modals('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close strong', modalState, false);
	modals('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close strong', modalState, false);
});