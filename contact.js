const scriptURL = 'https://script.google.com/macros/s/AKfycbwCZbpZ1LDYl_5J0SqFGhKnjOJlC9gflWOWTFS_3rITMxgwszNmEuV6x0TUJgCUrsBrTg/exec';
const form = document.forms['contact-form'];
const submitButton = form.querySelector('button[type="submit"]');
const container2 = document.querySelector('.container2');

form.appendChild(container2); // Append the message element to the form

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Disable the submit button and show a loading message
  submitButton.disabled = true;
  container2.textContent = 'submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      container2.textContent = 'thank you! your form has been submitted.';
      form.reset();
    })
    .catch((error) => {
      container2.textContent = 'error submitting the form. please try again.';
      console.error('Error!', error.message);
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
