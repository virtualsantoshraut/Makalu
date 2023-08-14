const uploadForm = document.getElementById('uploadForm');
const imageInput = document.getElementById('imageInput');

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('image', imageInput.files[0]);

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message); // Show a success message
    // Add code to update the gallery display with the newly uploaded image if desired
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Image upload failed'); // Show an error message
  });
});
