const projects = document.querySelectorAll('.case');
const root = document.documentElement;

root.style.setProperty('--case-opacity', '0');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = 'animIn 1s forwards';
            observer.unobserve(entry.target);
        };    
    });
});

projects.forEach(project => {
    observer.observe(project);
});