document.addEventListener('DOMContentLoaded', function () {
    // Main selectors in the document
    const formContent = document.querySelectorAll('.form-content');
    const progressSteps = document.querySelectorAll('.step');
    const nextButtons = document.querySelectorAll('.next-button');
    const backButtons = document.querySelectorAll('.back-button');

    let currentStep = 0; // Keep track of the current page

    function nextPage() {

        // Hiding the current page and cycling through the next page by adding the active class
        formContent[currentStep].classList.remove('active');

        currentStep = (currentStep + 1) % formContent.length; // Cycle through pages

        progressSteps[currentStep].classList.add('active');
        formContent[currentStep].classList.add('active');

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

    // Function to initialize datepicker library 
    function initializeDatepicker() {
        // will populate
    }

    // Idea page (3)
    const designIdeasSelect = document.getElementById('design-ideas');
    const designIdeasOptions = document.getElementById('design-ideas-options');
    const ideasOptions = document.getElementById('ideas-options');
    const scratchOptions = document.getElementById('scratch-options');
    const photosSelect = document.getElementById('photos');
    const photosOptions = document.getElementById('photos-options');
    const ideaButton = document.querySelector('.idea-button');
    const ideaNote = document.querySelector('.idea-note');

    function togglePageThree() {
        if (designIdeasSelect.value && photosSelect.value) {
            ideaButton.classList.remove('hidden');
            ideaNote.classList.remove('hidden');
        } else {
            ideaButton.classList.add('hidden');
            ideaNote.classList.add('hidden');
        }
    }

    designIdeasSelect.addEventListener('change', function () {
        if (this.value === 'ideas') {
            designIdeasOptions.classList.remove('hidden');
            ideasOptions.classList.remove('hidden');
            scratchOptions.classList.add('hidden');
        } else if (this.value === 'scratch') {
            designIdeasOptions.classList.remove('hidden');
            scratchOptions.classList.remove('hidden');
            ideasOptions.classList.add('hidden');
        } else {
            designIdeasOptions.classList.add('hidden');
            ideasOptions.classList.add('hidden');
            scratchOptions.classList.add('hidden');
        }
    });

    photosSelect.addEventListener('change', function () {
        if (this.value === 'yes') {
            photosOptions.classList.remove('hidden');
        } else {
            photosOptions.classList.add('hidden');
        }
    });

    designIdeasSelect.addEventListener('change', function () {
        togglePageThree();
    });

    photosSelect.addEventListener('change', function () {
        togglePageThree();
    });


    // Timeline page (4)
    const timelineButton = document.querySelector('.timeline-button');
    const radioOptions = document.querySelectorAll('input[type="radio"][name="selection"]');
    const timelineNote = document.querySelector('.timeline-note');

    function togglePageFour() {
        const anyOptionSelected = Array.from(radioOptions).some(option => option.checked);
        timelineButton.style.display = anyOptionSelected ? 'block' : 'none';
        timelineNote.style.display = anyOptionSelected ? 'block' : 'none';
    }

    radioOptions.forEach(option => {
        option.addEventListener('change', togglePageFour);
    });

    // If the specific date option is selected, show the datepicker
    const specificDateOption = document.getElementById('option4');
    const datepickerContainer = document.getElementById('datepicker-container');
    const datepicker = document.getElementById('datepicker');

    specificDateOption.addEventListener('change', function () {
        datepickerContainer.style.display = this.checked ? 'block' : 'none';
    });
    
    // Function to toggle datepicker visibility
    function toggleDatepickerVisibility() {
        datepickerContainer.style.display = specificDateOption.checked ? 'block' : 'none';
    }

    // Event listener for specific date option
    specificDateOption.addEventListener('change', toggleDatepickerVisibility);

    // Event listeners for other radio options
    radioOptions.forEach(option => {
        if (option !== specificDateOption) { // Exclude specific date option
            option.addEventListener('change', function() {
                datepickerContainer.style.display = 'none'; // Hide datepicker
            });
        }
    });

    // Budget page (5)
    const budgetButton = document.querySelector('.budget-button');
    const minimumDropdown = document.getElementById('minimum');
    const maximumDropdown = document.getElementById('maximum');
    const budgetNote = document.querySelector('.budget-note');

    function togglePageFive() {
        const isMinimumSelected = minimumDropdown.value !== 'option1';
        const isMaximumSelected = maximumDropdown.value !== 'option1';
        const isValidSelection = isMinimumSelected && isMaximumSelected;

        budgetButton.style.display = isValidSelection ? 'block' : 'none';
        budgetNote.style.display = isValidSelection ? 'block' : 'none';
    }

    minimumDropdown.addEventListener('change', togglePageFive);
    maximumDropdown.addEventListener('change', togglePageFive);
});


