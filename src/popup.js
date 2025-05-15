
function showAlert(message, title = "Alert!") {
    const popup = document.getElementById('alertPopup');
    const alertTitle = popup.querySelector('.alert-title');
    const alertMessage = popup.querySelector('.alert-message');
    
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    popup.classList.add('active');
}

function closeAlert() {
    const popup = document.getElementById('alertPopup');
    popup.classList.remove('active');
}