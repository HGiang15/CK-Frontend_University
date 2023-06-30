var form = document.getElementById('form')
var account = document.getElementById('account')
var password = document.getElementById('password')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    var accountValue = account.value.trim();
    var passwordValue = password.value.trim();

    let allInputsValid = true;

    if (accountValue === '') {
        // show error, add class error 
        setErrorFor(account, 'Vui lòng nhập tên đăng nhập')
        allInputsValid = false;
    } else {
        // add success class
        setSuccessFor(account);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Vui lòng nhập mật khảu')
        allInputsValid = false;
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Vui lòng nhập tối thiểu 8 kí tự');
        allInputsValid = false;
    } else if (!checkUpperCase(passwordValue)) {
        setErrorFor(password, 'Vui lòng chứa 1 kí tự Hoa')
        allInputsValid = false;
    } else if (!checkNumber(passwordValue)) {
        setErrorFor(password, 'Vui lòng chứa ít nhất 1 kí tự số');
        allInputsValid = false;
    } else {
        setSuccessFor(password);
    }

    if (allInputsValid) {
        showSuccessMessage();
    }
}


function setErrorFor(input, message) {
    var formControl = input.parentElement; 
    var small = formControl.querySelector('small');

    // add error mess inside small
    small.innerText = message;

    // add error class
    formControl.className = 'group error'
}

function setSuccessFor(input) {
    var formControl = input.parentElement; 
    formControl.className = 'group success'
}

// Chứa kí tự hoa
function checkUpperCase (password) {
    return /[A-Z]/.test(password);
}

// Chứa kí tự số
function checkNumber(password) {
    return /\d/.test(password);
}

function showSuccessMessage() {
    alert('Đăng nhập thành công!');
}


