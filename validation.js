const firstName = document.getElementById('first_name');
const lastName = document.getElementById('last_name');
const userEmail = document.getElementById('user_email');
const phoneNumber = document.getElementById('phone_number');
const userPass = document.getElementById('user_password');
const confirmUserPass = document.getElementById('confirm_user_password');
const submitBtn = document.getElementById('submit-btn');

function inputEventMaker(input, inputName, errorMsg) {
    input.addEventListener('input', () => {
        input.setCustomValidity('');
        input.checkValidity();
    });
    input.addEventListener('invalid', () => {
        if(input.value === '') {
            input.setCustomValidity(`Enter your ${inputName}`);
        } else {
            input.setCustomValidity(`${errorMsg}`);
        }
    });
}

inputEventMaker(firstName, 'First Name', 'First Name should be 3 characters minimum and can only contain upper and lowercase letters');
inputEventMaker(lastName, 'Last  Name', 'Last Name should be 3 characters minimum and can only contain upper and lowercase letters');
inputEventMaker(userEmail, 'User Email', 'User Email should be 6 characters minimum');
inputEventMaker(phoneNumber, 'Phone Number', 'Phone Number should consist of 3 characters followed by 3 characters and then 4 characters');
inputEventMaker(userPass, 'Password', 'Password should be 6 characters minimum');

function validatePassword() {
    if(userPass.value != confirmUserPass.value) {
        confirmUserPass.setCustomValidity("Passwords Don't Match");
    } else {
        confirmUserPass.setCustomValidity('');
    }
} 

userPass.onchange = validatePassword;
confirmUserPass.onkeyup = validatePassword;

submitBtn.addEventListener('click', () => {
    if (
        firstName.checkValidity() == true
        && lastName.checkValidity() == true
        && userEmail.checkValidity() == true
        && phoneNumber.checkValidity() == true
        && userPass.checkValidity() == true
        && confirmUserPass.checkValidity() == true
    ) {
        alert('Welcome to the REAL world!');
    } else {
        alert('You must complete all fields in order to WAKE UP');
    }
});