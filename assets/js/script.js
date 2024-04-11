// JavaScript for Clinic

// Toggle contact form
document.getElementById('contactButton').addEventListener('click', function() {
    document.querySelector('.caja__trasera-contacts').style.transform = 'translateX(0)';
  });
  
  document.getElementById('closeButton').addEventListener('click', function() {
    document.querySelector('.caja__trasera-contacts').style.transform = 'translateX(-100%)';
  });
  