const timer = (deadline, id) => {
	const getTimeRemaining = (endtime) => {
		const t = Date.parse(endtime) - Date.now(),
			days = Math.floor(t / 1000 / 60 / 60 / 24),
			hours = Math.floor((t / 1000 / 60 / 60 ) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	};

	const addZero = (num) => {
		return  num <= 9 ? `0${num}` : num;
	};

	const getElements = (endtime, selector) => {
		const timer = document.querySelector(selector),
			day = timer.querySelector('#days'),
			hour = timer.querySelector('#hours'),
			minute = timer.querySelector('#minutes'),
			second = timer.querySelector('#seconds'),
			timerInterval = setInterval(updateTime, 1000); 
		
		updateTime();

		function updateTime() {
			const t = getTimeRemaining(endtime);
		
			day.textContent = addZero(t.days);
			hour.textContent = addZero(t.hours);
			minute.textContent = addZero(t.minutes);
			second.textContent = addZero(t.seconds);

			if (t.total <= 0) {
				day.textContent = '00';
				hour.textContent = '00';
				minute.textContent = '00';
				second.textContent = '00';

				clearInterval(timerInterval);
			}
		}
	};
  
	getElements(deadline, id);
};

export default timer;