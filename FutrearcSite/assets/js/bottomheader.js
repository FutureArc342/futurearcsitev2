document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const header = document.querySelector('.bottom-header');
        if (!header) return; // Kontrollera om elementet finns
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) { // Ökade till 100px för att göra det tydligare
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        });
    }, 100); // Kort fördröjning för att säkerställa att DOM är laddad
});
