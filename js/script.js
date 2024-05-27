const dtAccordion = document.querySelectorAll(".js-accordion dt");

const active = 'ativo'

dtAccordion[0].classList.add(active)
dtAccordion[0].nextElementSibling.classList.add(active)


function accordion() {
  this.classList.toggle(active);
  this.nextElementSibling.classList.toggle(active);
}

dtAccordion.forEach((item) => {
  item.addEventListener("click", accordion);
});
