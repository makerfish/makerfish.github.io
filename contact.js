const scriptURL = 'https://script.google.com/macros/s/AKfycbwCZbpZ1LDYl_5J0SqFGhKnjOJlC9gflWOWTFS_3rITMxgwszNmEuV6x0TUJgCUrsBrTg/exec';
const form = document.forms['contact-form'];
const submitButton = form.querySelector('button[type="submit"]');
const feedbackMessage = document.createElement('p');

form.appendChild(feedbackMessage); // Append the message element to the form

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Disable the submit button and show a loading message
  submitButton.disabled = true;
  feedbackMessage.textContent = 'submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => response.json())
    .then((data) => {
      if (data.status !== 'success') {
        throw new Error(data.message || 'Network response was not ok');
      }
      feedbackMessage.textContent = 'thank you! your form has been submitted.';
      form.reset();
    })
    .catch((error) => {
      feedbackMessage.textContent = 'error submitting the form. please try again.';
      console.error('Error!', error.message);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
