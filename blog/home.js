function addResponsive() {
  const topNav = document.getElementById('top-nav')
  if (topNav.className === 'nav') {
    topNav.className += ' responsive'
  } else {
    topNav.className = 'nav'
  }
}
