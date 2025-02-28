document.addEventListener('DOMContentLoaded', function() {
    // Vänta på att include.js ska vara klar
    setTimeout(() => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        // Skapa overlay element
        const overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        
        // Skapa popup element
        const popup = document.createElement('div');
        popup.className = 'news-popup';
        popup.innerHTML = '<p>Nyheter lanseras snart! 🚀</p>'; // varning medelande för att nyheter inte är klart
        document.body.appendChild(popup);
        
        // Lägg till klickhändelse för nyhetsknappen
        const newsLink = document.querySelector('nav ul li a[href="#"]');
        if (newsLink) {
            newsLink.addEventListener('click', function(e) {
                e.preventDefault();
                popup.classList.add('show');
                setTimeout(() => {
                    popup.classList.remove('show');
                }, 2000);
            });
        }
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
        });
    }, 100);
});

