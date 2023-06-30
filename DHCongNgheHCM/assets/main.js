var form = document.getElementById('form');
var fullname = document.getElementById('fullname');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var title = document.getElementById('title');
var content = document.getElementById('content');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var fullnameValue = fullname.value.trim();
    var phoneValue = phone.value.trim();
    var emailValue = email.value.trim();
    var titleValue = title.value.trim();
    var contentValue = content.value.trim();

    let allInputsValid = true;

    if (fullnameValue === '') {
        // show error, add class error
        setErrorFor(fullname, 'Không được bỏ trống');
        allInputsValid = false;
    } else if (!isValidUsername(fullnameValue)) {
        setErrorFor(fullname, 'Chỉ chứa kí tự');
        allInputsValid = false;
    } else {
        setSuccessFor(fullname);
    }


    if (phoneValue === '') {
        setErrorFor(phone, 'Vui lòng nhập số điện thoại');
        allInputsValid = false;
    } else if (!isValidPhone(phoneValue)) {
        setErrorFor(phone, 'Số điện thoại không hợp lệ');
        allInputsValid = false;
    } else {
        setSuccessFor(phone);
    }

    if (emailValue === '') {
        // show error, add class error
        setErrorFor(email, 'Không được bỏ trống');
        allInputsValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sai định dạng');
        allInputsValid = false;
    } else {
        setSuccessFor(email);
    }


    if (titleValue === '') {
        // show error, add class error
        setErrorFor(title, 'Không được bỏ trống');
        allInputsValid = false;
    } else {
        setSuccessFor(title);
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
    var formControl = input.parentElement; 
    var small = formControl.querySelector('small');

    // add error mess inside small
    small.innerText = message;

    // add error class
    formControl.className = 'group error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement; 
    formControl.className = 'group success'
}

// định dạng email
function isEmail (email) {
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

// Tên đăng nhập chỉ chứa kí tự
function isValidUsername (fullname) {
    return /^[a-zA-Z\s]+$/.test(fullname);
}

// Điện thoại từ 10-12 số, số đầu là 0
function isValidPhone(phone) {
    return /^0\d{9,11}$/.test(phone);
}

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Gửi thành công!');
}