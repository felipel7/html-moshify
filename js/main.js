const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach(item =>
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible--expanded');
  })
);

const footerMessage = document.querySelector('.footer__copyright');
const today = new Date();

if (footerMessage) {
  footerMessage.textContent = `Copyright \u00A9 ${today.getFullYear()} Felipe Silva`;
}
