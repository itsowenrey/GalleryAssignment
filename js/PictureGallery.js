document.addEventListener('DOMContentLoaded', () => {
    const featuredImage = document.querySelector('#gallery figure img');
    const caption = document.querySelector('#gallery figure figcaption');
    const thumbnails = document.querySelectorAll('#gallery ul li img');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Update the main image
            featuredImage.src = thumbnail.src.replace('-small', '-large');
            featuredImage.alt = thumbnail.alt;
            caption.textContent = thumbnail.alt;

            // Show full-sized image in modal
            openModal(featuredImage.src, thumbnail.alt);
            currentIndex = index; // Track index for navigation

            // Apply grayscale filter to all thumbnails, remove for active
            thumbnails.forEach(img => img.style.filter = 'grayscale(100%)');
            thumbnail.style.filter = 'none';
        });
    });
});
