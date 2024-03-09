let $ = document
let toggleBtn = $.querySelector('#toggle-btn')
let menuItems = $.querySelectorAll('.menu a')
let isMenuOpen = false

toggleBtn.addEventListener('click', () => {

    if (!isMenuOpen) {

        isMenuOpen = true
        toggleBtn.classList.add('active')
        menuItems[0].style.transform = 'translate(150px, 0)'
        menuItems[1].style.transform = 'translate(150px, 90px)'
        menuItems[2].style.transform = 'translate(90px, 150px)'
        menuItems[3].style.transform = 'translate(0, 150px)'
    } else {

        isMenuOpen = false
        toggleBtn.classList.remove('active')
        menuItems.forEach(item => item.style.transform = 'translate(0, 0)')
    }
})