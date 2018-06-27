let slider = document.getElementById('slider');
let header = document.getElementById('header');
let sliderBottom = slider.offsetTop + slider.offsetHeight - 20;

let buttons = document.querySelectorAll('#menu .skill');
let allButtons = document.querySelectorAll('.skill');
let skills = document.getElementById('skills');
let skillsTrigger = skills.offsetTop;
let work = document.getElementById('work');
let workTrigger = work.offsetTop - work.offsetHeight / 2;
let about = document.getElementById('about');
let aboutTrigger = about.offsetTop - about.offsetHeight / 2;
let contact = document.getElementById('contact');
let contactTrigger = contact.offsetTop - contact.offsetHeight;

function menu(y) {
	if (sliderBottom < y) {
		header.style.transform = 'translateY(50px)';
	} else {
		header.style.transform = 'translateY(-50px)';
	}
}

function highlighter(y) {
	if (skillsTrigger < y) {
		buttons[0].classList.add('highlighted');
	} else {
		buttons[0].classList.remove('highlighted');
	}
	if (workTrigger < y) {
		buttons[0].classList.remove('highlighted');
		buttons[1].classList.add('highlighted');
	} else {
		buttons[1].classList.remove('highlighted');
	}
	if (aboutTrigger < y) {
		buttons[1].classList.remove('highlighted');
		buttons[2].classList.add('highlighted');
	} else {
		buttons[2].classList.remove('highlighted');
	}
	if (contactTrigger < y) {
		buttons[2].classList.remove('highlighted');
		buttons[3].classList.add('highlighted');
	} else {
		buttons[3].classList.remove('highlighted');
	}
}
document.addEventListener('scroll', event => {
	menu(event.pageY);
	highlighter(event.pageY);
	event.preventDefault();
});
allButtons.forEach(button => {
	button.addEventListener('click', event => {
		event.preventDefault();
		let element = document.querySelector(event.target.attributes['data-scrollTo'].nodeValue);
		console.log(element);
		if (element == null) {
			window.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} else {
			window.scroll({
				top: element.offsetTop - 150,
				left: 0,
				behavior: 'smooth'
			});
		}
	});
});
