const amazonNumber = document.getElementById('amazonNumber');
const warningMessage = document.getElementById('warning-message');
const successMessage = document.getElementById('success-message');

amazonNumber.setAttribute('minlength', '19');
amazonNumber.setAttribute('maxlength', '19');

function validateAmazonNumber() {
  formattedValue = amazonNumber.value.replace(/\D/g, ''); // Keep only digits

  // Add space after every 3 digits, then after every 7 digits
  formattedValue = formattedValue.replace(/^(\d{3})(\d{1,7})?(\d{1,7})?/, '$1 $2 $3').trim();

  amazonNumber.value = formattedValue.substring(0, 19); // Adjusted limit for 3x7x7 format

  if (formattedValue.length < 19) {
    warningMessage.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    warningMessage.style.display = 'none';
    successMessage.style.display = 'block';
  }
}

amazonNumber.addEventListener('input', validateAmazonNumber);

const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
  const amazonNumber = document.getElementById('amazonNumber');
  if (amazonNumber.value.length < 19) {
    event.preventDefault(); // Prevent submission if less than 19 characters
    // Optionally display a warning message here
    console.log("success");
  }
});
