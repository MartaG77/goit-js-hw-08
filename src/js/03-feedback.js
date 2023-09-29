
import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state";
let emptyForm = {
    email: '',
    message: ''
  };
const filledForm = localStorage.getItem(STORAGE_KEY);
if(filledForm){
  emptyForm = JSON.parse(filledForm);
  form.elements.email.value = emptyForm.email;
  form.elements.message.value = emptyForm.message;
}
const savedForm = throttle((data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, 500);
function saveData(evt) {
    emptyForm[evt.target.name] = evt.target.value;
    savedForm(emptyForm);
}
form.addEventListener("input", saveData);
const submitBtn = sentForm => {
    sentForm.preventDefault();
    const {
      elements: {email, message},
    } = sentForm.currentTarget;
    if (email.value === "" || message.value === "") {
      return alert("Error! All fields should be filled in ;-)");
    }
    const objectData = {
        email: email.value,
        message: message.value,
      };
      console.log(objectData);
      localStorage.removeItem(STORAGE_KEY);
      emptyForm = {
        email: '',
        message: ''
      };
      form.reset();
}
form.addEventListener("submit", submitBtn);