function updateProgressBar() {
    const start = new Date('January 1, 2024 00:00:00');
    const end = new Date('December 31, 2024 23:59:59');
    const now = new Date();
    const birthday = new Date('March 17, 2024 00:00:00');

    const total = end - start;
    const progress = now - start;
    const progressPercent = Math.round((progress / total) * 100);
    const birthdayPercent = Math.round(((birthday - start) / total) * 100);

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercent}%`;

    // Style for the birthday marker
    progressBar.style.background = `linear-gradient(to right, #4e54c8 ${birthdayPercent}%, #fbc02d ${birthdayPercent}%, #fbc02d ${birthdayPercent + 0.5}%, #4e54c8 ${birthdayPercent + 0.5}%)`;

    const percentageText = document.getElementById('percentage');
    percentageText.textContent = `${progressPercent}% of 2024 has elapsed.`;
}

setInterval(updateProgressBar, 86400000);
updateProgressBar();
