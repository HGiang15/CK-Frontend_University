var form = document.getElementById('form');
var email = document.getElementById('email');
var password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var emailValue = email.value.trim()
    var passwordValue = password.value.trim()

    let allInputsValid = true;

    if (emailValue === '') {
        // show error, add class error
        setErrorFor(email, 'Vui lòng nhập email');
        allInputsValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sai định dạng');
        allInputsValid = false;
    } else {
        // add success class
        setSuccessFor(email);
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
    var formControl = input.closest('.form-group');
    var small = formControl.querySelector('small');

    // C2
    // var parent = input.parentElement;
    // var gr = parent.parentElement;
    // var small = gr.querySelector('small')
    // small.style.visibility = 'visible'

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-group error'

    // C2
    // gr.classList.remove('success')
    // gr.classList.add('error')
}

function setSuccessFor(input) {
    var formControl = input.closest('.form-group');

    formControl.className = 'form-group success'

    // C2
    // var parent = input.parentElement;
    // var gr = parent.parentElement;
    // var small = gr.querySelector('small')

    // small.style.visibility = 'hidden'
    // gr.classList.add('error')
    // gr.classList.remove('success')
}

// MK chu dau viết hoa
function isPasswordValid(password) {
    return /^[A-Z]/.test(password);
}

// Mk chứa ít nhất 1 kí tự số
function containsNumber(password) {
    return /\d/.test(password);
}

// định dạng email
function isEmail (email) {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Gửi thành công!');
}