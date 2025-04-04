document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            // Close all other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
    
    // Terms & Conditions toggle
    const termsToggle = document.querySelector('.terms-toggle');
    const termsContent = document.querySelector('.terms-content');
    
    if (termsToggle && termsContent) {
        termsToggle.addEventListener('click', () => {
            termsContent.classList.toggle('active');
            
            if (termsContent.classList.contains('active')) {
                termsContent.style.maxHeight = '500px'; // Set a fixed height that allows scrolling
                termsToggle.textContent = 'Hide Terms & Conditions';
            } else {
                termsContent.style.maxHeight = null;
                termsToggle.textContent = 'View Full Terms & Conditions';
            }
        });
    }
    
    // Form submission
    const enquiryForm = document.querySelector('.enquiry-form');
    
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would normally send the form data to a server
            // For this demo, we'll just show an alert
            
            const formData = new FormData(enquiryForm);
            let formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Show successful submission message
            alert('Thank you for your interest! An Ayesha\'s Real Estate agent will contact you shortly.');
            
            // Reset form
            enquiryForm.reset();
        });
    }
    
    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const enquirySection = document.querySelector('.enquiry-section');
            
            if (enquirySection) {
                enquirySection.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            }
        });
    }
}); 