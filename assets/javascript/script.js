// IntersectionObserver functions load sections on scroll;

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

// Locks navbar button animation to selected section

let navSwitch = document.querySelectorAll("#nav-switch");

function remove() {
    navSwitch.forEach(function (item) {
        item.classList.remove("nav-click");
    })
}

navSwitch.forEach(function (item) {
    item.classList.remove("nav-click");
    item.addEventListener("click", function (e) {
        remove();
        e.target.classList.add("nav-click");
    })
});

let logo = document.getElementById('logo');
logo.addEventListener('click', remove);

// starter code for colour change (light / dark mode) on toggle //

let button = document.getElementById('xxx');

button.addEventListener('click', function () {
    document.documentElement.style.setProperty('--secondary', 'rgba(238, 238, 247, 1)');
    console.log('chips')
})
