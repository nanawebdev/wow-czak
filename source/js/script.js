const subMenuTrigger = document.querySelectorAll('.js-submenu-trigger')
const mobMenu = document.querySelector('.js-mobile-menu')
const openMobMenuButton = document.querySelector('.js-open-mobmenu')

function openSubmenu() {
  subMenuTrigger.forEach(v => {
    v.addEventListener('click', () => {
      v.classList.toggle('open');
    })
  })
}

if (mobMenu) {
  mobMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobMenu.classList.remove('open')
    }

    if (e.target.classList.contains('js-close-button')) {
      mobMenu.classList.remove('open')
    }
  })
}

if (openMobMenuButton) {
  openMobMenuButton.addEventListener('click', () => {
    mobMenu.classList.add('open')
  })
}


if (subMenuTrigger) {
  openSubmenu()
}
