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

            // Trigger the mail application using a temporary anchor element
            // (This prevents the main browser tab from going into a frozen "loading" state)
            const tempLink = document.createElement('a');
            tempLink.href = mailtoUrl;
            tempLink.click();

            // Immediate feedback for the user
            alert('Opening your email app... Please press "Send" in your email client to complete your inquiry!');
            
            inquiryForm.reset();
        });
    }
