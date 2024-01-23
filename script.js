function updateProgressBar() {
    const start = new Date(`January 1, 2024 00:00:00`);
    const end = new Date(`December 31, 2024 23:59:59`);
    const now = new Date();

    const total = end - start;
    const progress = now - start;
    const percentage = (progress / total) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${percentage}%`;

    const percentageText = document.getElementById('percentage');
    percentageText.textContent = `${percentage.toFixed(2)}% of 2024 completed`;
}

// Update the progress bar every day
setInterval(updateProgressBar, 86400000);
updateProgressBar();
