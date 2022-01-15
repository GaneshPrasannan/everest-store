/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
 select('body').classList.toggle('mobile-nav-active')
 this.classList.toggle('bi-list')
 this.classList.toggle('bi-x')
})