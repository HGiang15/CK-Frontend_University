var form = document.getElementById('form');
var fullname = document.getElementById('fullname');
var content = document.getElementById('content');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    var fullnameValue = fullname.value.trim();
    var emailValue = email.value.trim();
    var contentValue = content.value.trim();

    let allInputsValid = true;

    if (fullnameValue === '') {
        // show error, add class error
        setErrorFor(fullname, 'Vui lòng nhập tên');
        allInputsValid = false;
    } else {
        // add success class
        setSuccessFor(fullname);
    }

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

    if (contentValue === '') {
        // show error, add class error
        setErrorFor(content, 'Vui lòng nhập nội dung');
        allInputsValid = false;
    } else {
        // add success class
        setSuccessFor(content);
    }

    if (allInputsValid) {
        showSuccessMessage();
    }

    // if (document.querySelectorAll('.error').length === 0) {
    //     alert('Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn!');
    // }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

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

// Cửa sổ thành công
function showSuccessMessage() {
    alert('Gửi thành công!');
}