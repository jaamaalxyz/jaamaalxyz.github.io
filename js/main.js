const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show')
		})
	}
}

showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	navLink.forEach((n) => n.classList.remove('active'))
	this.classList.add('active')

	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

const scroll = ScrollReveal({
	origin: 'top',
	distance: '80px',
	duration: 2000,
	reset: false
})

scroll.reveal('.home__title', {})
scroll.reveal('.button', { delay: 200 })
scroll.reveal('.home__img', { delay: 400 })
scroll.reveal('.home__social-icon', { interval: 200 })

scroll.reveal('.about__img', {})
scroll.reveal('.about__subtitle', { delay: 200 })
scroll.reveal('.about__text', { delay: 400 })

scroll.reveal('.skills__subtitle', {})
scroll.reveal('.skills__name', { distance: '20px', delay: 50, interval: 100 })
scroll.reveal('.skills__img', { delay: 400 })

scroll.reveal('.project__img', { interval: 200 })
scroll.reveal('.illustration__img', { interval: 200 })

scroll.reveal('.contact__input', { interval: 200 })
