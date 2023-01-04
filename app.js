/* Imports */

/* Get DOM Elements */

const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name');
const updateBtn = document.getElementById('update-btn');

// console.log('nameDisplay', nameDisplay);
// console.log('nameInput', nameInput);

/* State */

/* Events */

updateBtn.addEventListener('click', () => {
    // console.log('clicking update button');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
