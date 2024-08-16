// Open modal and load the trailer with autoplay and mute
function openModal(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    // Autoplay with mute to avoid restrictions
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`; 
    modal.style.display = "block";
}

// Close modal and stop the video
function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    
    modal.style.display = "none";
    iframe.src = ""; // Stop the video
}

// Add event listeners to the "Watch Trailer" buttons
document.querySelectorAll('.watch-trailer').forEach(button => {
    button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-video-id');
        openModal(videoId);
    });
});
