// NAV BAR

// Nav Bar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})

// Nav Bar menu toggle
function toggle_menu() {
    const menu_toggle = document.querySelector('.menu_toggle')
    const navigation = document.querySelector('.navigation')
    menu_toggle.classList.toggle('active')
    navigation.classList.toggle('active')
}