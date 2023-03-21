const tabs = (headerSelector, tabsSelector, contentsSelector, activeClass) => {
	const header = document.querySelector(headerSelector),
		tabs = document.querySelectorAll(tabsSelector),
		content = document.querySelectorAll(contentsSelector);

	const hideContent = () => {
		content.forEach(item => item.classList.add('hide'));
		
		tabs.forEach(tab => tab.classList.remove(activeClass.replace(/^\./, '')));
	};

	const showContent = (i = 0) => {
		content[i].classList.remove('hide');

		tabs[i].classList.add(activeClass.replace(/^\./, ''));
	};

	hideContent();
	showContent();

	header.addEventListener('click', (e) => {
		const target = e.target;
		if (target && (target.classList.contains(tabsSelector.replace(/^\./, '')) || 
		target.parentNode.classList.contains(tabsSelector.replace(/^\./, '')))) {
			tabs.forEach((tab, i) => {
				if (tab == target || target.parentNode == tab) {
					hideContent();
					showContent(i);	
				}
			});
		}
	});
};

export default tabs;