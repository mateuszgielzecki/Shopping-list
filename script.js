const configurationPanel = document.querySelector(".configuration-panel");
const configurationBtn = document.querySelector(".fa-bars");

configurationBtn.addEventListener("click", () => {
  configurationPanel.classList.toggle("active");
});
