const form = document.getElementById('form');
const title = document.getElementById('title');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const content = document.getElementById('content');

console.log(form)
console.log("hello")

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const titleValue = title.value.trim();
    const fullnameValue = fullname.value.trim();
    const emailValue = email.value.trim();
    const contentValue = content.value.trim();

    let allInputsValid = true;

    if (titleValue === '') {
        // show error, add class error
        setErrorFor(title, 'Không được bỏ trống');
        allInputsValid = false;
    } else {
        setSuccessFor(title);
    }

    if (fullnameValue === '') {
        // show error, add class error
        setErrorFor(fullname, 'Không được bỏ trống');
        allInputsValid = false;
    } else {
        setSuccessFor(fullname);
    }

    if (emailValue === '') {
        // show error, add class error
        setErrorFor(email, 'Không được bỏ trống');
        allInputsValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sai định dạng');
        allInputsValid = false;
    }
    else {
        setSuccessFor(email);
    }

    if (contentValue === '') {
        // show error, add class error
        setErrorFor(content, 'Không được bỏ trống');
        allInputsValid = false;
    } else {
        setSuccessFor(content);
    }

    if (allInputsValid) {
        showSuccessMessage();
    }
}


function setErrorFor(input, message) {
    const formControl = input.closest('.group');
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    // formControl.classList.add('error');
    formControl.className = 'group error'
}

function setSuccessFor(input) {
    const formControl = input.closest('.group');
    formControl.className = 'group success'
}

// định dạng email
function isEmail (email) {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Đăng nhập thành công!');
}