document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    if (this.checkValidity()) {
        
        window.location.href = 'success.html'; 
    } else {
        alert('يرجى التأكد من إدخال جميع الحقول بشكل صحيح.');
    }
});
