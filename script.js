// Show Popup after 3 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('newsletter-popup').style.display = 'block';
    }, 3000);
};

function closePopup() {
    document.getElementById('newsletter-popup').style.display = 'none';
}

// Handle Form Submissions
document.getElementById('popup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your 10% discount code: ETHNICBAG10');
    closePopup();
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Bags Beyond Choice will contact you soon.');
    this.reset();
});
