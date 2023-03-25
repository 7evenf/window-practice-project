const images = () => {
	const parentElem = document.querySelector('.works'),
		workSection = document.createElement('div'),
		bigImage = document.createElement('img');

	workSection.classList.add('popup');
	workSection.style.cssText = `display: none; 
                               justify-content: center;
                               align-items: center;`;
	parentElem.append(workSection);
	workSection.append(bigImage);
	bigImage.style.cssText = `max-width: 50%;
                            max-height: 100%`;

  
	parentElem.addEventListener('click', (e) => {
		e.preventDefault();
		const target = e.target;

		if (target && target.classList.contains('preview')) {
			const path = target.parentNode.getAttribute('href');

			workSection.style.display = 'flex';
			bigImage.setAttribute('src', path);

			document.documentElement.classList.add('modal-open');
		}

		if (target && target.matches('.popup')) {
			workSection.style.display = 'none';

			document.documentElement.classList.remove('modal-open');
		}
	});
};

export default images;