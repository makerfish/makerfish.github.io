const scriptURL = 'https://script.google.com/macros/s/AKfycby5JssuiCflBx6jzvKpUWmyS8IgYrBGDLpf6E1U7ESJwGPFUyIhjCMiNGHVEzsFsi0R/exec'
const form = document.forms['contact-form']
const container2 = document.querySelector('.container2')

form.addEventListener('submit', async e => {
  e.preventDefault()
  console.log('Form submitted') // Debugging log

  // Provide immediate feedback to the user
  container2.innerHTML = `
    <h4>submitting your form...</h4>
  `

  try {
    const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    console.log('Success!', response) // Debugging log
    container2.innerHTML = `
      <h4>your form has been submitted!</h4>
      <button id="submit-another">submit another form</button>
    `
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  } catch (error) {
    console.error('Error!', error.message)
    container2.innerHTML = `
      <h4>There was an error submitting your form. Please try again.</h4>
      <button id="submit-another"tTry again</button>
    `
    document.getElementById('submit-another').addEventListener('click', () => {
      window.location.reload()
    })
  }
})