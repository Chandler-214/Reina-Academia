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

    // --- FORM SUBMISSION (OPTIMIZED MAILTO METHOD) ---
    const inquiryForm = document.getElementById('inquiryForm');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Extract input values
            const name = document.getElementById('name').value.trim();
            const grade = document.getElementById('grade').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const task = document.getElementById('task').value.trim();
            const instruction = document.getElementById('instruction').value.trim();
            const userEmail = document.getElementById('email').value.trim();
            const deadline = document.getElementById('deadline').value.trim();
            const budget = document.getElementById('budget').value.trim();

            // Format Email Subject and Body
            const emailSubject = encodeURIComponent(`Inquiry - ${name} (${task})`);
            
            const emailBody = encodeURIComponent(
                `REINA ACADEMIA INQUIRY FORM\n` +
                `------------------------------------\n` +
                `Name: ${name}\n` +
                `Grade/Year Level: ${grade}\n` +
                `Subject: ${subject}\n` +
                `Task: ${task}\n` +
                `Client Email: ${userEmail}\n` +
                `Preferred Deadline: ${deadline}\n` +
                `Budget: ${budget}\n\n` +
                `Instructions:\n${instruction}`
            );

            const mailtoUrl = `mailto:senoritasoojin@gmail.com?subject=${emailSubject}&body=${emailBody}`;

            // Create temporary anchor to launch mail application instantly without hanging the page
            const tempLink = document.createElement('a');
            tempLink.href = mailtoUrl;
            tempLink.click();

            // Immediate feedback popup
            alert('Opening your mail application... Please press "Send" in your email client to complete your inquiry!');
            
            inquiryForm.reset();
        });
    }
});
