const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name');
const updateBtn = document.getElementById('update-btn');

console.log('nameDisplay', nameDisplay);
console.log('nameInput', nameInput);

updateBtn.addEventListener('click', () => {
    console.log('clicking update button');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});
