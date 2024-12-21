// JavaScript for Book Flipping
const pages = document.querySelectorAll('.book-page');
const nextButton = document.getElementById('next-page');
const prevButton = document.getElementById('prev-page');

let currentPage = 0;

// Function to update the pages' visibility and flipping
function updatePages() {
    pages.forEach((page, index) => {
        if (index <= currentPage) {
            page.style.transform = `rotateY(-180deg)`;
            page.style.zIndex = `${pages.length - index}`; // Keep correct stacking
        } else {
            page.style.transform = `rotateY(0deg)`;
            page.style.zIndex = `${index}`;
        }
    });
}

// Event listeners for navigation buttons
nextButton.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Initialize the book
updatePages();