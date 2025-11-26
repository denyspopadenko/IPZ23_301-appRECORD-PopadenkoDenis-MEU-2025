document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".lab-item, .lab-subitem");
  const sections = document.querySelectorAll(".lab-section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;

      // Зняти активність з усіх кнопок та секцій
      buttons.forEach(b => b.classList.remove("active"));
      sections.forEach(sec => sec.classList.remove("active"));

      // Додати активний стан до поточної кнопки
      btn.classList.add("active");

      // Активувати потрібну секцію
      const section = document.getElementById(target);
      if (section) {
        setTimeout(() => {
          section.classList.add("active");
        }, 50);
      }
    });
  });
});