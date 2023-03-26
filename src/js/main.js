import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';
import images from './modules/images';

window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	const modalState = {
		form: 0,
		type: 'tree'
	};
	const deadline = '2023-05-01';

	changeModalState(modalState);
	modals(modalState);
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active', '.glazing_block > a');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
	forms('form', 'input', modalState);
	tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
	timer(deadline, '.container1');
	images();
});