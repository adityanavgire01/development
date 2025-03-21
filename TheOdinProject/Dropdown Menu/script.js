class Dropdown {
    constructor(dropdownElement, mode = "click") {
        this.dropdown = dropdownElement;
        this.button = this.dropdown.querySelector(".dropdown-btn");
        this.menu = this.dropdown.querySelector(".dropdown-menu");
        this.mode = mode;
        this.init();
    }

    init() {
        if (this.mode === "click") {
            this.button.addEventListener("click", () => this.toggleMenu());
            document.addEventListener("click", (e) => this.closeOnClickOutside(e));
        } else if (this.mode === "hover") {
            this.dropdown.addEventListener("mouseenter", () => this.showMenu());
            this.dropdown.addEventListener("mouseleave", () => this.hideMenu());
        }
    }

    toggleMenu() {
        this.menu.classList.toggle("visible");
    }

    showMenu() {
        this.menu.classList.add("visible");
    }

    hideMenu() {
        this.menu.classList.remove("visible");
    }

    closeOnClickOutside(e) {
        if (!this.dropdown.contains(e.target)) {
            this.menu.classList.remove("visible");
        }
    }
}

// Initialize dropdowns
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const mode = dropdown.classList.contains("hover-dropdown") ? "hover" : "click";
        new Dropdown(dropdown, mode);
    });
});
