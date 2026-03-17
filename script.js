// Simple page switching logic
const links = document.querySelectorAll("nav .links a");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
    link.addEventListener("click", () => {
        // Remove active state from all links
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        // Show the correct page
        const pageName = link.dataset.page;
        pages.forEach(page => {
            page.classList.remove("active");
            if (page.id === pageName) page.classList.add("active");
        });
    });
});
