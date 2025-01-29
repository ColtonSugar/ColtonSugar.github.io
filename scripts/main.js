// Get modal elements
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Add event listeners to images
document.querySelectorAll('.enlargeable').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block'; // Show the modal
        modalImage.src = image.src; // Set modal image source
    });
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
