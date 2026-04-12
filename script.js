// Trigger popup after 2.5 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('signup-popup').style.display = 'block';
    }, 2500);
};

function closePopup() {
    document.getElementById('signup-popup').style.display = 'none';
}

// Close if clicked outside
window.onclick = function(event) {
    let modal = document.getElementById('signup-popup');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.getElementById('popup-form').onsubmit = function(e) {
    e.preventDefault();
    alert("Welcome! Check your email for a 10% discount.");
    closePopup();
};
