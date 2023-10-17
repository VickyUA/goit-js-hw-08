import throttle from 'lodash';

const feedbackForm = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const textareaForm = document.querySelector('textarea');

const LS_key = "feedback-form-state";
    
let formInfo = {};

restoreForm();

feedbackForm.addEventListener('input', throttle(handlerInput, 500));
feedbackForm.addEventListener('submit', handlerSubmit);

function handlerInput(event) {
    formInfo[event.target.name] = event.target.value;
    localStorage.setItem(LS_key, JSON.stringify(formInfo));
}

function handlerSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(LS_key);
    formInfo = {};
}

function restoreForm() {
    const savedData = JSON.parse(localStorage.getItem(LS_key));
    if (savedData) {
        const { email, message } = savedData;
        if (email) {            
            inputForm.value = email;
            formInfo.email = email;     
        
        }
        if (message) {
            textareaForm.value = message;
            formInfo.message = message;  
        }
    }    
}
