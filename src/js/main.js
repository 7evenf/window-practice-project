import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

	modals('.popup_engineer', '.popup_engineer_btn', '.popup_engineer .popup_close strong');
	modals('.popup', '.phone_link', '.popup .popup_close strong');
	tabs('.glazing_slider', '.glazing_block', '.glazing_content', '.active');
	tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');

	

});