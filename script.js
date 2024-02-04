const submit = document.querySelector("#submit-button")

const pwd1 = document.querySelector("#pwd");
const pwd2 = document.querySelector("#conf-pwd");


// Events

submit.addEventListener("click", (e) => {
    if (pwd1.value != pwd2.value) {
        pwd1.setCustomValidity("*Passwords do not match");
        // document.querySelector('.error')?.classList.remove('error');
        pwd1.classList.add('error');
        pwd2.classList.add('error');
    } else {
        pwd1.setCustomValidity("");
        pwd1.classList.remove('error');
        pwd2.classList.remove('error');
    }
});