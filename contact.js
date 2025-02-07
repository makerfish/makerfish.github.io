const scriptURL = 'https://script.google.com/macros/s/AKfycbzg7uY20fhJcRIMUsjf_LQXXBSs3w-hkTYDQdF2IKph6YGi1SMRkfHXv8NkR5D1I8yW/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("thanks for reaching out!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})