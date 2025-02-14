const scriptURL = 'https://script.google.com/macros/s/AKfycbx4d8tGfWLjZDfN7PgN1vjuEm8tzeogbyRas2lJXlcOAIphapFlY_PKYbN-UFfA-k3AeA/exec';
const form = document.forms['contact-form'];
const container2 = document.querySelector('.container2');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log('Form submitted'); // Debugging log

  // Provide immediate feedback to the user
  container2.innerHTML = `<h4>Submitting your form...</h4>`;

  try {
    const response = await fetch(scriptURL, { 
      method: 'POST', 
      body: new FormData(form)
    });

    if (!response.ok) throw new Error('Network response was not ok');

    const result = await response.json(); // ✅ Wait for JSON response

    console.log('Success!', result); // Debugging log

    // Check if the response contains success or error
    if (result.status === "success") {
      container2.innerHTML = `
        <h4>Your form has been submitted!</h4>
        <button id="submit-another">Submit Another Form</button>
      `;
    } else {
      throw new Error(result.message || "Unknown error occurred");
    }

  } catch (error) {
    console.error('Error!', error.message);

    // Show error message with a retry button
    container2.innerHTML = `
      <h4>There was an error submitting your form. Please try again.</h4>
      <button id="submit-another">Try Again</button>
    `;
  }

  // Add event listener for reloading the form
  document.getElementById('submit-another').addEventListener('click', () => {
    window.location.reload();
  });
});
