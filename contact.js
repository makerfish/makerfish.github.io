const scriptURL = 'https://script.google.com/macros/s/AKfycbzLscUk1RXOivAaLD49TZFhxhb-sFln_FL_gdHU3Hc6Ek710gJiKm96kIs6oQzRVFkWww/exec';
const form = document.forms['contact-form'];
const container2 = document.querySelector('.container2');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Form submitted'); // Debugging log

  // Provide immediate feedback to the user
  container2.innerHTML = `<h4>Submitting your form...</h4>`;

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });

    if (!response.ok) throw new Error('Network response was not ok');

    console.log('Success!', response); // Debugging log

    // Show success message with a button to submit another form
    container2.innerHTML = `
      <h4>Your form has been submitted!</h4>
      <button id="submit-another">Submit Another Form</button>
    `;

    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload();
    });

  } catch (error) {
    console.error('Error!', error.message);

    // Show error message with a retry button
    container2.innerHTML = `
      <h4>There was an error submitting your form. Please try again.</h4>
      <button id="submit-another">Try Again</button>
    `;

    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload();
    });
  }
});
