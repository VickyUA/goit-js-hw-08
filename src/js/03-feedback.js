import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

const LS_key = "feedback-form-state";
    
let formInfo = {};

feedbackForm.addEventListener('input', throttle(handlerInput, 500));
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
    formInfo[event.target.name] = event.target.value.trim();
    localStorage.setItem(LS_key, JSON.stringify(formInfo));
}

function handlerSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LS_key);
    console.log(formInfo);
    formInfo = {};
}

function restoreForm() {
    try {
        const data = localStorage.getItem(LS_key);
        if (!data) return;
        formInfo = JSON.parse(data);
        Object.entries(formInfo).forEach(([key, val]) => {
        feedbackForm.elements[key].value = val;
        });
    } catch (error) {
        console.log(error.message);
    }
}
restoreForm();