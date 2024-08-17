// Function to open the modal and play the video
function openModal(videoId) {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Set the video src and display the modal
    videoFrame.src = youtubeUrl;
    modal.style.display = "block";
}

// Function to close the modal and stop the video
function closeModal() {
    const modal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");

    // Hide the modal and stop the video by removing the src
    modal.style.display = "none";
    videoFrame.src = "";
}

// Attach event listeners to the Watch Trailer buttons
document.querySelectorAll('.watch-trailer').forEach(button => {
    button.addEventListener('click', function() {
        const videoId = this.getAttribute('data-video-id');
        openModal(videoId);
    });
});
