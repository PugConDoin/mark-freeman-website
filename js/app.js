const navButton = document.querySelector('button[aria-expanded]');

    function toggleNav({ target }) {
      const expanded = target.getAttribute('aria-expanded') === 'true' || false;
      navButton.setAttribute('aria-expanded', !expanded);
    }

    navButton.addEventListener('click', toggleNav);

function getYear() {
  let currentYear = new Date().getFullYear();
  document.querySelector('.copy').textContent = `Mark Freeman ${ currentYear }`;
}
getYear();

const scroller = document.getElementById('scroller');
const nav = document.querySelector('nav');
// Add a handler for the 'click' event by providing a callback function.
// Whenever the element is clicked, a pop-up with "Element clicked!" will
// appear.

scroller.addEventListener('click', function() {
  nav.scrollIntoView({
    behavior: 'smooth'
  })
})