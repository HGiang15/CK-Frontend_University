var form = document.getElementById('form');
var title = document.getElementById('title');
var fullname = document.getElementById('fullname');
var email = document.getElementById('email');
var content = document.getElementById('content');

console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var titleValue = title.value.trim();
    var fullnameValue = fullname.value.trim();
    var emailValue = email.value.trim();
    var contentValue = content.value.trim();

    var allInputsValid = true;

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
    } else if (!isFullname(fullnameValue)) {
        setErrorFor(fullname, 'Tên ko có số');
        allInputsValid = false;
    } else {
        setSuccessFor(fullname);
    }

    if (emailValue === '') {
        // show error, add class error
        setErrorFor(email, 'Không được bỏ trống');
        allInputsValid = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Sai định dạng email');
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

    small.innerText = message;
    formControl.className = 'group error'
}

function setSuccessFor(input) {
    const formControl = input.closest('.group');
    formControl.className = 'group success'
}

// fullname
function isFullname (fullname) {
    return /^[a-zA-Z]+$/.test(fullname)
}

// email
function isEmail (email) {
    return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
// phone
function isValidPhone(phone) {
    return /^0[1-9]\d{8,10}$/.test(phone);
}
// thành công
function showSuccessMessage() {
    alert('Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn');
}