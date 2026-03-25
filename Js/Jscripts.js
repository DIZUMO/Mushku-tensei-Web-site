document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "h1, h2, h3, h4, p, li, img, iframe, table"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });

});