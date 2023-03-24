import checkNumInput from './checkNumInput';

const changeModalState = (obj) => {
	const windowsForm = document.querySelectorAll('.balcon_icons_img'),
		width = document.querySelectorAll('#width'),
		height = document.querySelectorAll('#height'),
		viewtype = document.querySelectorAll('#view_type'),
		checkbox = document.querySelectorAll('.checkbox');
  
	checkNumInput('#width');
	checkNumInput('#height');
  

	const getData = (elem, typeEvent, prop) => {
		elem.forEach((item, i) => {
			item.addEventListener(typeEvent, () => {
				switch(item.nodeName) {
				case 'SPAN': 
					obj[prop] = i;
					break;
				case 'INPUT':
					if (item.getAttribute('type') == 'checkbox') {
						i == 0 ? obj[prop] = 'Холодно' : obj[prop] = 'Тепло';
						elem.forEach((box, j) => {
							box.checked = false;
							if (j == i) box.checked = true;
						}); 
					} else {
						obj[prop] = item.value;
					}
					break;
				case 'SELECT': {
					obj[prop] = item.value; 
					break;
				}
				}
			});
		});
	};
  
	getData(windowsForm, 'click', 'form');
	getData(width, 'input', 'width');
	getData(height, 'input', 'height');
	getData(viewtype, 'change', 'type');
	getData(checkbox, 'change', 'profile');
};

export default changeModalState;