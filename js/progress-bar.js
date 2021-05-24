(function () {
			
	var progbar = document.querySelector('.line-progress-bar-grow');
	var others = document.querySelectorAll('.line-progress-bar-grow');		
			
	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				others.forEach((el) => {
					el.classList.add("yellow");
				});
			}
		});
	});

	observer.observe(progbar);
		
		
})();