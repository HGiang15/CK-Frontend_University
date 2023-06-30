const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const password = document.getElementById('password');


form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const fullnameValue = fullname.value.trim()
    const passwordValue = password.value.trim()

    let allInputsValid = true;

    if (fullnameValue === '') {
        // show error, add class error
        setErrorFor(fullname, 'Không được bỏ trống');
        allInputsValid = false;
    } else {
        setSuccessFor(fullname);
    }

    if (passwordValue === '') {
        // show error, add class error
        setErrorFor(password, 'Không được bỏ trống');
        allInputsValid = false;
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Vui lòng nhập tối thiểu 8 kí tự');
        allInputsValid = false;
    } else if (!isPasswordValid(passwordValue)) {
        setErrorFor(password, 'Vui lòng nhập kí tự in hoa ở đầu');
        allInputsValid = false;
    } else if(!containsNumber(passwordValue)) {
        setErrorFor(password, 'Mật khẩu phải chứa ít nhất một kí tự số');
        allInputsValid = false;
    } else {
        setSuccessFor(password)
    }

    if (allInputsValid) {
        showSuccessMessage();
    }
}


function setErrorFor(input, message) {
    const formControl = input.closest('.form-group');
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    // formControl.classList.add('error');
    formControl.className = 'form-group error'
}

function setSuccessFor(input) {
    const formControl = input.closest('.form-group');

    formControl.className = 'form-group success'
}

// MK chu dau viết hoa
function isPasswordValid(password) {
    return /^[A-Z]/.test(password);
}

// Mk chứa ít nhất 1 kí tự số
function containsNumber(password) {
    return /\d/.test(password);
}

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Đăng nhập thành công!');
}