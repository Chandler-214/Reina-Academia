document.addEventListener('DOMContentLoaded', () => {
    // --- NAVIGATION & VIEW SWITCHING LOGIC ---
    const btnAbout = document.getElementById('btnAbout');
    const btnTC = document.getElementById('btnTC');
    const btnServices = document.getElementById('btnServices');
    const btnInquiry = document.getElementById('btnInquiry');
    const menuToggleBtn = document.getElementById('menuToggleBtn');

    const navPanel = document.getElementById('navPanel');
    const pillTitle = document.getElementById('pillTitle');

    const viewAbout = document.getElementById('viewAbout');
    const viewTC = document.getElementById('viewTC');
    const viewServices = document.getElementById('viewServices');
    const viewInquiry = document.getElementById('viewInquiry');

    const views = {
        about: { block: viewAbout, btn: btnAbout, title: 'ღ about us ღ' },
        tc: { block: viewTC, btn: btnTC, title: 'ღ terms and conditions ღ' },
        services: { block: viewServices, btn: btnServices, title: 'ღ services ღ' },
        inquiry: { block: viewInquiry, btn: btnInquiry, title: 'ღ inquiry form ღ' }
    };

    function switchView(targetKey) {
        Object.keys(views).forEach(key => {
            const view = views[key];
            if (key === targetKey) {
                view.block.classList.remove('hidden');
                view.btn.classList.add('active');
                pillTitle.textContent = view.title;
            } else {
                view.block.classList.add('hidden');
                view.btn.classList.remove('active');
            }
        });
    }

    if (btnAbout) btnAbout.addEventListener('click', () => switchView('about'));
    if (btnTC) btnTC.addEventListener('click', () => switchView('tc'));
    if (btnServices) btnServices.addEventListener('click', () => switchView('services'));
    if (btnInquiry) btnInquiry.addEventListener('click', () => switchView('inquiry'));

    if (menuToggleBtn && navPanel) {
        menuToggleBtn.addEventListener('click', () => {
            navPanel.style.display = (navPanel.style.display === 'none') ? 'grid' : 'none';
        });
    }

    // --- EMAILJS FORM SUBMISSION ---
    const inquiryForm = document.getElementById('inquiryForm');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = inquiryForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            
            // Show loading status on button
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Replace with your EmailJS Service ID and Template ID
            const serviceID = 'service_uw10a1h';
            const templateID = 'template_68fbwl8';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Thank you! Your inquiry has been successfully sent.');
                    inquiryForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Failed to send inquiry. Please try again or reach out via DMs.');
                })
                .finally(() => {
                    submitBtn.textContent = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
