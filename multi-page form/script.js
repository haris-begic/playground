const formContent = document.querySelectorAll('.form-content');
const progressSteps = document.querySelectorAll('.step');

const nextButtons = document.querySelectorAll('.next-button');
const backButtons = document.querySelectorAll('.back-button');

const noteElements = document.querySelectorAll('.encouraging-note'); // Get all note elements

const hiddenButton = document.querySelector('.hidden-button');
const hiddenButton2 = document.querySelector('.hidden-button2');

const userInput = document.querySelector('.user-input');
const fileInput = document.querySelector('.file-input');
const formCheckbox = document.querySelector('.form-checkbox');

const firstCheck = document.querySelector('#option1');
const secondCheck = document.querySelector('#option2');
const thirdCheck = document.querySelector('#option3');
const fourthCheck = document.querySelector('#option4');

userInput.addEventListener('input', validateAndShowNext);
fileInput.addEventListener('change', validateAndShowNext); 
formCheckbox.addEventListener('change', validateAndShowNext); 

firstCheck.addEventListener('change', validateAndShowNext2);
secondCheck.addEventListener('change', validateAndShowNext2);
thirdCheck.addEventListener('change', validateAndShowNext2);
fourthCheck.addEventListener('change', validateAndShowNext2);

const radioGroups = document.querySelectorAll('.radio-group-1, .radio-group-2');
radioGroups.forEach(group => {
    const radioButtons = group.querySelectorAll('input[type="radio"]');

    radioButtons.forEach(button => {
        button.addEventListener('change', validateAndShowNext3);
    });
});

let currentStep = 0; // Keep track of the current page

function nextPage() {

    // Hiding the current page and cycling through the next page by adding the active class
    formContent[currentStep].classList.remove('active');

    currentStep = (currentStep + 1) % formContent.length; // Cycle through pages

    formContent[currentStep].classList.add('active');
    progressSteps[currentStep].classList.add('active');

    if(currentStep == 2) {
        validateAndShowNext();
    }

    if(currentStep == 4) {
        validateAndShowNext2();
    }

    if(currentStep == 5) {
        validateAndShowNext3();
    }

    console.log(currentStep);

}

function prevPage() {
    formContent[currentStep].classList.remove('active');
    progressSteps[currentStep].classList.remove('active');

    currentStep = (currentStep - 1 + formContent.length) % formContent.length; // Cycle through pages and make sure not to go into negative

    formContent[currentStep].classList.add('active');
    progressSteps[currentStep].classList.add('active');

    if (selectedImage) {
        selectedImage.classList.remove('selected');
        selectedImage = null;
    }

}

function navigationButtons() {

    nextButtons.forEach(button => {
        button.addEventListener('click', nextPage);
    });

    backButtons.forEach(button => {
        button.addEventListener('click', prevPage);
    });
}

navigationButtons();

const cards = document.querySelectorAll('.card');

let selectedImage = null;

function handleTransition(event) {
    if (selectedImage) {
        selectedImage.classList.remove('selected');
    }

    event.target.classList.add('selected');
    selectedImage = event.target;

    setTimeout(nextPage, 300); 
}


cards.forEach(card => {
    card.addEventListener('click', handleTransition);
});

function validateAndShowNext() {
    
    // Check for input, file selection, and if the checkbox is checked
    const isFormValid = userInput.value.length !== 0 || 
                            fileInput.files.length > 0 || 
                            formCheckbox.checked;

    hiddenButton.style.display = isFormValid ? "block" : "none"; 
    hiddenNote.style.display = isFormValid ? 'block' : 'none';
}

function validateAndShowNext2() {
    
    // Check for input, file selection, and if the checkbox is checked
    const isCheckValid =  firstCheck.checked ||
                        secondCheck.checked ||
                         thirdCheck.checked ||
                         fourthCheck.checked;

    hiddenButton2.style.display = isCheckValid ? "block" : "none"; 
    hiddenNote1.style.display = isCheckValid ? 'block' : 'none';
}

// Function to initialize datepicker library 
function initializeDatepicker() {
  // will populate
}

const dropdown1 = document.getElementById('dropdown1');
const dropdown2 = document.getElementById('dropdown2');
const hiddenButton3 = document.querySelector('.hidden-button3');
const hiddenNote = document.querySelector('.note');
const hiddenNote1 = document.querySelector('.note1');
const hiddenNote2 = document.querySelector('.note2');

function validateAndShowNext3() {
  const isDropdown1Selected = dropdown1.selectedIndex !== 0; // Check if a non-default option is selected
  const isDropdown2Selected = dropdown2.selectedIndex !== 0;

  const isFormValid =  isDropdown1Selected && isDropdown2Selected; 

  hiddenButton3.style.display = isFormValid ? 'block' : 'none'; 
  hiddenNote2.style.display = isFormValid ? 'block' : 'none';
}

// Event Listeners - Attach to both dropdowns
dropdown1.addEventListener('change', validateAndShowNext3);
dropdown2.addEventListener('change', validateAndShowNext3);

