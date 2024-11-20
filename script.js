// Get modal element
const modal = document.getElementById('videoModal');
const videos = document.querySelectorAll('.modal-video');

// Function to open modal and play specific video
function openVideoModal(videoId) {
    // Hide all videos first
    videos.forEach(video => {
        video.style.display = 'none';
        video.pause();
        video.currentTime = 0;
    });

    // Show and play selected video
    const selectedVideo = document.getElementById(videoId);
    selectedVideo.style.display = 'block';
    
    // Show modal
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
        selectedVideo.play();
    }, 10);
}

// Function to close modal
function closeVideoModal() {
    modal.classList.remove('show');
    
    // Pause all videos
    videos.forEach(video => {
        video.pause();
    });

    // Hide modal after animation
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closeVideoModal();
    }
}

// Close modal on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeVideoModal();
    }
});

// Add this JavaScript to handle the video modal
document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    const videoUrl = 'https://www.youtube.com/embed/XmpfbmuE9bM'; // Replace YOUR_VIDEO_ID with actual YouTube video ID

    // When modal is about to be shown
    videoModal.addEventListener('show.bs.modal', function () {
        videoIframe.setAttribute('src', videoUrl);
    });

    // When modal is about to be hidden
    videoModal.addEventListener('hide.bs.modal', function () {
        videoIframe.setAttribute('src', '');
    });
}); 