const forms = (formSelector, inputSelector) => {
	const form = document.querySelectorAll(formSelector),
		input = document.querySelectorAll(inputSelector),
		phoneInputs = document.querySelectorAll('input[name="user_phone"]');

	const phrases = {
		loading: 'Загрузка...',
		success: 'Запрос успешно отправлен!',
		fail: 'При отправке запроса возникла ошибка!'
	};

	phoneInputs.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/\D/, '');
		});
	});

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

			postData('assets/server.php', formData)
				.then(result => {
					console.log(result);
					notification.textContent = phrases.success;
				})
				.catch(() => notification.textContent = phrases.fail)
				.finally(() => {
					clearInputs();
					setTimeout(() => notification.remove(), 5000);
				});
		});
	});
};

export default forms;