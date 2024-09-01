// Add event listener to nav links
document.querySelectorAll('.nav-link').forEach(link => {
	link.addEventListener('click', () => {
		// Add active class to clicked link
		link.classList.add('active');
		// Remove active class from other links
		document.querySelectorAll('.nav-link').forEach(otherLink => {
			if (otherLink !== link) {
				otherLink.classList.remove('active');
			}
		});
	});
});
 
