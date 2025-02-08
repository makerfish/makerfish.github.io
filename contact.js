const scriptURL = 'https://script.google.com/macros/s/AKfycbzCh1iKLr-WgSJX0vUSeget0LRbFTLbOjQcBLd2X4tEZzVJ2FD0kgpGUmQR0q2VHV-h/exec'
const form = document.forms['contact-form']
const container2 = document.querySelector('.container2')
const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
if (!response.ok) throw new Error('Network response was not ok');

form.addEventListener('submit', async e => {
  e.preventDefault()
  console.log('Form submitted') // Debugging log

  // Provide immediate feedback to the user
  container2.innerHTML = 
    <h4>submitting your form...</h4>
  

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    console.log('Success!', response) // Debugging log
    container2.innerHTML = 
      <h4>your form has been submitted!</h4>;
      <button id="submit-another">submit another form</button>
    
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  } catch (error) {
    console.error('Error!', error.message)
    container2.innerHTML = 
      <h4>there was an error submitting your form. please try again.</h4>;
      <button id="submit-another">try again</button>
    
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  }
})