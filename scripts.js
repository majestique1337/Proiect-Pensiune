document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const hiddenMenu = document.querySelector(".hidden-menu");
    const middleItems = document.querySelector(".middle-items");
    const button48 = document.querySelector(".button-48");
    const mainContent = document.querySelector("main");
  
    burgerMenu.addEventListener("click", () => {
      // Toggle hidden menu
      hiddenMenu.classList.toggle("show");
  
      // Toggle middle items and button
      middleItems.classList.toggle("hidden-menu");
      button48.classList.toggle("hidden-menu");
  
      // Animate burger menu icon
      const lines = document.querySelectorAll(".burger-line");
      lines[0].classList.toggle("rotate-down");
      lines[1].classList.toggle("hide-line");
      lines[2].classList.toggle("rotate-up");
  
      // Hide main content
      mainContent.classList.toggle("hide-main");
    });
  });
  

 // Initialize EmailJS
emailjs.init('7AzvBrkzNk0QkifD3');

// Initialize Flatpickr
flatpickr("#start", {
    dateFormat: "d/m/Y",
    minDate: "today",
    onChange: function(selectedDates, dateStr, instance) {
        endDatePicker.set("minDate", dateStr);
    }
});

var endDatePicker = flatpickr("#end", {
    dateFormat: "d/m/Y",
    minDate: "today"
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefon = document.getElementById('telefon').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    const message = document.getElementById('message').value;

    // Form validation can go here

    emailjs.send('service_vx5gczg', 'template_bt9xaum', {
      to_name: 'Casa Alunis', // Replace with the recipient name or team name
      reply_to: email,
      name: name,
      telefon: telefon,
      start_date: start,
      end_date: end,
      message: message
    })
    .then(function(response) {
      console.log('Success!', response.status, response.text);

      // Show success message
      document.getElementById('success-message').style.display = "block";
      document.getElementById('success-message').innerText = "Thank you! Your message has been successfully sent. We will contact you very soon!";

      // Reset form
      document.getElementById('contact-form').reset();
  }, function(error) {
      console.log('Failed...', error);
  });
});







