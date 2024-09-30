// JavaScript to handle the click event on gallery images
document.querySelectorAll('.gallery-grid img').forEach(image => {
    image.addEventListener('click', function() {
        const previewImage = document.getElementById('preview-image');
        previewImage.src = this.src;  // Set the clicked image as the preview image
        updatePreview();  // Ensure any current filters (like brightness) are applied to the new preview image
    });
});

// Function to update the preview (use any existing logic like brightness or blur)
function updatePreview() {
    const exposure = document.getElementById('exposure').value;
    const iso = document.getElementById('iso').value;
    const focus = document.getElementById('focus').value;

    const previewImage = document.getElementById('preview-image');
    previewImage.style.filter = `brightness(${iso / 3200}) blur(${focus / 100}px)`;
    previewImage.style.opacity = `${exposure / 30}`;
}
// Show the editing section when the Edit button is clicked
document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('editing-section').style.display = 'flex';
    document.getElementById('edit-preview-image').src = document.getElementById('preview-image').src; // Load current preview image
});

// Close the editing section
document.getElementById('closeEditButton').addEventListener('click', function() {
    document.getElementById('editing-section').style.display = 'none';
});

// Update exposure
document.getElementById('exposure').addEventListener('input', function() {
    const exposureValue = this.value;
    document.getElementById('exposureValue').innerText = exposureValue;
    const editPreviewImage = document.getElementById('edit-preview-image');
    editPreviewImage.style.filter = `brightness(${100 + parseInt(exposureValue)}%)`;
});

// Update saturation
document.getElementById('saturation').addEventListener('input', function() {
    const saturationValue = this.value;
    document.getElementById('saturationValue').innerText = saturationValue + '%';
    const editPreviewImage = document.getElementById('edit-preview-image');
    editPreviewImage.style.filter += ` saturate(${saturationValue}%)`;
});

// Update brightness
document.getElementById('brightness').addEventListener('input', function() {
    const brightnessValue = this.value;
    document.getElementById('brightnessValue').innerText = brightnessValue + '%';
    const editPreviewImage = document.getElementById('edit-preview-image');
    editPreviewImage.style.filter += ` brightness(${brightnessValue}%)`;
});

// Handle noise reduction
document.getElementById('noise-reduction-edit').addEventListener('input', function() {
    const noiseValue = this.value;
    document.getElementById('noiseReductionValueEdit').innerText = noiseValue + '%';
    const editPreviewImage = document.getElementById('edit-preview-image');
    editPreviewImage.style.filter += ` blur(${noiseValue / 100}px)`;
});

// Handle star enhancement
document.getElementById('star-enhancement-edit').addEventListener('change', function() {
    const starEnhancementEnabled = this.checked;
    const starEnhancementStatus = document.getElementById('starEnhancementStatusEdit');
    const editPreviewImage = document.getElementById('edit-preview-image');
    
    if (starEnhancementEnabled) {
        starEnhancementStatus.innerText = 'On';
        editPreviewImage.style.filter += ' brightness(1.3)'; // Simulate star enhancement
    } else {
        starEnhancementStatus.innerText = 'Off';
        editPreviewImage.style.filter = editPreviewImage.style.filter.replace('brightness(1.3)', '');
    }
});

// Handle contrast adjustment
document.getElementById('contrast-edit').addEventListener('input', function() {
    const contrastValue = this.value;
    document.getElementById('contrastValueEdit').innerText = contrastValue + '%';
    const editPreviewImage = document.getElementById('edit-preview-image');
    editPreviewImage.style.filter += ` contrast(${contrastValue}%)`;
});

// Apply changes button (can be extended to save changes or apply to the main image)
document.getElementById('applyChangesButton').addEventListener('click', function() {
    // Logic to apply changes (e.g., save the image, update the main preview, etc.)
    alert('Changes Applied!'); // Placeholder alert for demonstration
});

