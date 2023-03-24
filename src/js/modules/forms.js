import checkNumInput from './checkNumInput';
import {closeModal} from './modals';

const forms = (formSelector, inputSelector, dataFromCalc) => {
	const form = document.querySelectorAll(formSelector),
		input = document.querySelectorAll(inputSelector);
	
	const phrases = {
		loading: 'Загрузка...',
		success: 'Запрос успешно отправлен!',
		fail: 'При отправке запроса возникла ошибка!'
	};

	checkNumInput('input[name="user_phone"]');

	const postData = async (url, body) => {
		const data = await fetch(url, {
			method: 'POST',
			body: body
		});

		return await data.text();
	};

	const clearInputs = () => {
		input.forEach(item => {
			item.value = '';
		});
	};

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();
			
			const notification = document.createElement('div');
			notification.classList.add('status');
			item.appendChild(notification);
			notification.textContent = phrases.loading;

			const formData = new FormData(item);
			if (item.getAttribute('data-calc') == 'end') {
				for (let key in dataFromCalc) {
					formData.append(key, dataFromCalc[key]);
				}
			}

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					notification.textContent = phrases.success;
				})
				.catch(() => notification.textContent = phrases.fail)
				.finally(() => {
					clearInputs();
					
					Object.keys(dataFromCalc).forEach(item => delete dataFromCalc[item]);

					setTimeout(() => {
						notification.remove();
						closeModal();
					}, 2000);
				});
		});
	});
};

export default forms;