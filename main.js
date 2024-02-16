const scriptURL = 'https://script.google.com/macros/s/AKfycbxHq9dgvYdNCCYTlo3468jOHYS-8nHdRGL4YUm_M6sy5uHgXF0B2eZMBry6KPrA_W-MZw/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
