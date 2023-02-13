const hiddenSections = document.querySelectorAll('.hide');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //    if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.4

});

hiddenSections.forEach(attr => {
    observer.observe(attr);
})