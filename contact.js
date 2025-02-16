const scriptURL = 'https://script.google.com/macros/s/AKfycbwCZbpZ1LDYl_5J0SqFGhKnjOJlC9gflWOWTFS_3rITMxgwszNmEuV6x0TUJgCUrsBrTg/exec';
const form = document.forms['contact-form'];
const contact = document.querySelector('.contact');

form.addEventListener('submit', async e => {
  e.preventDefault()
  console.log('Form submitted') // Debugging log

  // Provide immediate feedback to the user
  container2.innerHTML = 
    <h2>Submitting your form...</h2>
  

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    console.log('Success!', response) // Debugging log
    container2.innerHTML = 
      <div>
        <h2>Your form has been submitted!</h2>
        <button id="submit-another">Submit another form</button>
      </div>
    
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  } catch (error) {
    console.error('Error!', error.message)
    container2.innerHTML = 
      <div>
        <h2>There was an error submitting your form. Please try again.</h2>
        <button id="submit-another">Try again</button>
      </div>
    
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  }
})
  