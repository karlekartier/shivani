// Dark Mode Logic
const themeCheckbox = document.getElementById('theme-mode');
const html = document.documentElement;

// Initialize theme
const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
html.setAttribute('data-bs-theme', storedTheme);
if (storedTheme === 'dark') {
    html.classList.add('dark');
}

if (themeCheckbox) {
    themeCheckbox.checked = storedTheme === 'dark';
}

// Toggle theme on checkbox change
if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        const newTheme = themeCheckbox.checked ? 'dark' : 'light';
        html.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        if (newTheme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    });
}

// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

if (mobileMenuBtn && mobileMenu) {
    // Ensure hidden class is removed so max-height animation works
    mobileMenu.classList.remove('hidden');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('menu-open');
        mobileMenu.classList.toggle('menu-open');
    });

    // Close menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('menu-open');
            mobileMenu.classList.remove('menu-open');
        });
    });
}

// Project Filters
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => {
                b.classList.remove('active', 'bg-blue-600', 'text-white');
                b.classList.add('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:text-gray-300');
            });

            // Add active class to clicked button
            btn.classList.add('active', 'bg-blue-600', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-600', 'hover:bg-gray-100', 'dark:bg-gray-800', 'dark:text-gray-300');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hidden');
                    // Add animation class if needed
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Back to Top Logic
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0', 'translate-y-20');
            backToTop.classList.add('opacity-100', 'translate-y-0');
        } else {
            backToTop.classList.add('opacity-0', 'translate-y-20');
            backToTop.classList.remove('opacity-100', 'translate-y-0');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
