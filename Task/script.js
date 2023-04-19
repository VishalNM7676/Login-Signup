// selecting the input fields of Register form
const firstNameValue = document.querySelector('.first-value')
const emailValue = document.querySelector('.email-value')
const phoneValue = document.querySelector('.phone-value')
const passwordValue = document.querySelector('.password-value')

// selecting the error fields of Register form
const firstNameErr = document.querySelector('.firstName-error')
const emailErr = document.querySelector('.email-error')
const phoneErr = document.querySelector('.phone-error')
const passwordErr = document.querySelector('.password-error')

// selecting the input fields of Sign In form
const emailValidation = document.querySelector('.email-validation')
const passwordValue1 = document.querySelector('.password-value1')

// selecting the error fields of Register form
const emailErrValidation = document.querySelector('.email-errorValidation')
const passwordErr1 = document.querySelector('.password-error1')

// selecting the button
const addSignBtn = document.querySelector('.signBtn')
const addloginBtn = document.querySelector('.loginBtn')

//Setting up user details
const userCreds = window.localStorage.getItem('userCreds') ? JSON.parse(window.localStorage.getItem('userCreds')) : [];

//Button Toggle and SignUp form Validation
const signInBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');

const signInBlock = document.querySelector('.signIn-block')
const signUpBlock = document.querySelector('.register-block')


signInBtn && signInBtn.addEventListener('click', (e) => {
    signUpBtn.classList.remove("active");
    signUpBlock.classList.remove("active");
    e.target.classList.add("active");
    signInBlock.classList.add("active");
})

signUpBtn && signUpBtn.addEventListener('click', (e) => {
    signInBtn.classList.remove("active");
    signInBlock.classList.remove("active");
    e.target.classList.add("active");
    signUpBlock.classList.add("active");
})


// Form Submit
const signInForm = document.querySelector(".sign-in-form");
const signUpForm = document.querySelector(".sign-up-form");

signInForm && signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailValidation.value.trim() && passwordValue1.value.trim()) {
        const activeUser = userCreds.filter((user) => {
            return user.email === emailValidation.value.trim() && user.password === passwordValue1.value.trim();
        })

        if (activeUser.length) {
            const url = window.location.href.split("/")
            url.splice(-1);
            url.push("dashboard.html");
            window.open(url.join("/"), "_self");
        } else {
            alert('Invalid Credentials');
        }
    } else {
        alert('All Fields are Mandatory')
    }
})

signUpForm && signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (firstNameValue.value.trim() && emailValue.value.trim() && phoneValue.value.trim() && passwordValue.value.trim()) {
        const user = {
            userName: firstNameValue.value.trim(),
            email: emailValue.value.trim(),
            phone: phoneValue.value.trim(),
            password: passwordValue.value.trim(),
        }
        userCreds.push(user);
        window.localStorage.setItem('userCreds', JSON.stringify(userCreds));
        window.location.reload(true);
    } else {
        alert('All Fields are Mandatory')
    }
})

// Selecting Register form
//First Name field
function validateFirstname() {
    let name = firstNameValue.value;

    if (name.length == 0) {
        firstNameErr.innerHTML = `Enter Your Full Name<ion-icon name="close-circle" id='icon1'></ion-icon>`
    }

    if (!name.match(/^[A-Za-z]{3,}\s[A-Za-z]{1,}$/)) {
        firstNameErr.innerHTML = 'Full Name Required';

        return false;
    }

    firstNameErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`

    return true;
}
firstNameValue && firstNameValue.addEventListener('keyup', validateFirstname)
firstNameValue && firstNameValue.addEventListener('blur', validateFirstname);


// email field
function validateEmail() {
    let email = emailValue.value;

    if (email.length == 0) {
        emailErr.innerHTML = `Enter Your E-mail<ion-icon name="close-circle" id='icon2'></ion-icon>`;
        return false;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailErr.innerHTML = 'Enter Valid E-mail';
        return false
    }

    emailErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    return true;
}

emailValue && emailValue.addEventListener('keyup', validateEmail)
emailValue && emailValue.addEventListener('blur', validateEmail)

// phoneNumber Field
function validatePhone() {
    let phone = phoneValue.value;

    if (phone.length == 0) {
        phoneErr.innerHTML = `Enter Phone Number<ion-icon name="close-circle" id='icon3'></ion-icon>`
        return false
    }

    if (!phone.match(/^[7-9]{1}[0-9]{9}$/)) {
        phoneErr.innerHTML = `Enter Valid Phone number`
        return false;
    }

    phoneErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    return true
}

phoneValue && phoneValue.addEventListener('keyup', validatePhone)
phoneValue && phoneValue.addEventListener('blur', validatePhone)

// password Field
function validatePassword() {
    let password = passwordValue.value;

    if (password.length == 0) {
        passwordErr.innerHTML = `Create Password<ion-icon name="close-circle" id='icon4'></ion-icon>`
        return false;
    }

    if (!password.match(/^[A-Za-z0-9@\*\$]{6,}$/)) {
        passwordErr.innerHTML = `Create Strong Password`
        return false;
    }

    passwordErr.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    return true;

}

passwordValue && passwordValue.addEventListener('keyup', validatePassword)
passwordValue && passwordValue.addEventListener('blur', validatePassword)


//Selecting Log In Form
// email field
function validateEmail1() {
    let email1 = emailValidation.value;

    if (email1.length == 0) {
        emailErrValidation.innerHTML = `Enter Your E-mail<ion-icon name="close-circle" id='icon2'></ion-icon>`;
        return false;
    }

    if (!email1.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailErrValidation.innerHTML = 'Enter Valid E-mail';
        return false
    }

    emailErrValidation.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    return true;
}

emailValidation && emailValidation.addEventListener('keyup', validateEmail1)
emailValidation && emailValidation.addEventListener('blur', validateEmail1)


// password Field

function validatePassword1() {
    let password = passwordValue1.value;

    if (password.length == 0) {
        passwordErr1.innerHTML = `Enter Password<ion-icon name="close-circle" id='icon4'></ion-icon>`
        return false;
    }

    if (!password.match(/^[A-Za-z0-9@\*\$]{6,}$/)) {
        passwordErr1.innerHTML = ``
        return false;
    }

    passwordErr1.innerHTML = `<ion-icon name="checkmark-circle" class="correct"></ion-icon>`;
    return true;
}

passwordValue1 && passwordValue1.addEventListener('keyup', validatePassword1)
passwordValue1 && passwordValue1.addEventListener('blur', validatePassword1)

// Render Local Storage Data
const dashboard = document.querySelector(".dasboard");
const table = document.querySelector(".table table tbody");
let count = 0;

dashboard && userCreds.forEach((user) => {
    count++;
    const row = document.createElement("tr");
    const innerContent = `
                        <td>${count}</td>
                        <td>${user.userName}</td>
                        <td>${user.email}</td>
                        <td>${user.phone}</td>
                        <td>${user.password}</td>
                        `;
    row.innerHTML = innerContent;
    table.appendChild(row);
})







