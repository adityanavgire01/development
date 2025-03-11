document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".click-dropdown").forEach(dropdown => {
        const btn = dropdown.querySelector(".dropdown-btn");
        const menu = dropdown.querySelector(".dropdown-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("visible");
        });

        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove("visible");
            }
        });
    });
});
