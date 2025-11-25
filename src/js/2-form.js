const formData = {
    email: "",
    message: "",
};

const STORAGE_KEY = 'feedback-form-state';
const data = loadFromLS(STORAGE_KEY);
const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
    const userMessage = new FormData(form);
    formData.email = userMessage.get('email');
    formData.message = userMessage.get('message');

    saveToLS(STORAGE_KEY, formData)
});

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const userMessage = new FormData(form);
    formData.email = userMessage.get('email');
    formData.message = userMessage.get('message');
    

    if (!formData.email || !formData.message) {

        alert('Fill please all fields')

    } else {

        console.log(formData);
        localStorage.removeItem(STORAGE_KEY);
        formData.email = '';
        formData.message = '';
        form.reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    form.elements.email.value = data?.email || '';
    form.elements.message.value = data?.message || '';

    formData.email = data?.email || '';
    formData.message = data?.message || '';
})

function saveToLS(key, value) {
    const dataJson = JSON.stringify(value);
    localStorage.setItem(key, dataJson);
};

function loadFromLS(key) {
    const dataStorage = localStorage.getItem(key);

    try {
        const value = JSON.parse(dataStorage);
        return value;
    } catch {
        return null;
    }
};