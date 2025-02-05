document.addEventListener('DOMContentLoaded', function () {
    const originalSrc = 'assets/images/logowhite.png';
    const hoverSrc = 'assets/images/logoorange.png';

    function addLogoHoverEffect(logo) {
        logo.addEventListener('mouseover', function () {
            logo.src = hoverSrc;
        });

        logo.addEventListener('mouseout', function () {
            logo.src = originalSrc;
        });
    }

    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                const logo = document.getElementById('logo');
                if (logo) {
                    addLogoHoverEffect(logo);
                    observer.disconnect(); // Stop observing once the logo is found
                }
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
});