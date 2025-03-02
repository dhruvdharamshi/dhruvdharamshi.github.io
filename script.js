function updateProgressBar() {
    const start = new Date(`January 1, 2025 00:00:00`);
    const end = new Date(`December 31, 2025 23:59:59`);
    const now = new Date();

    const total = end - start;
    const progress = now - start;
    const percentage = Math.round((progress / total) * 100);

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;

    const percentageText = document.getElementById('percentage');
    percentageText.textContent = `${percentage}% of 2025 has elapsed`;
}

// Update the progress bar every day
setInterval(updateProgressBar, 86400000);
updateProgressBar();
