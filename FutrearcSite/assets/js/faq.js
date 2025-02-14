document.addEventListener('DOMContentLoaded', function() {
    // Vänta på att include.js ska vara klar
    setTimeout(() => {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const button = item.querySelector('.faq-toggle');
            
            button.addEventListener('click', () => {
                // Stäng alla andra öppna FAQ-items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggla aktiv klass på klickad item
                item.classList.toggle('active');
            });
        });
    }, 100); // Kort fördröjning för att säkerställa att DOM:en är helt laddad
});
