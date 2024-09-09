// script.js

// Get the links and sections
const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');

// Add event listeners to the links
homeLink.addEventListener('click', () => {
  homeSection.style.display = 'block';
  aboutSection.style.display = 'none';
});

aboutLink.addEventListener('click', () => {
  homeSection.style.display = 'none';
  aboutSection.style.display = 'block';
});


aboutLink.addEventListener('click', () => {
    // Show the about section and hide the home section
    aboutSection.style.display = 'block';
    homeSection.style.display = 'none';
});

// Get the service link and dropdown elements
const serviceLink = document.getElementById('service-link');
const serviceDropdown = document.querySelector('.service-dropdown');

// Add an event listener to the service link
serviceLink.addEventListener('click', () => {
  // Toggle the visibility of the dropdown menu
  serviceDropdown.classList.toggle('visible');
  serviceDropdown.style.display = 'visible';
  homeSection.style.display = 'none';

});






// Get the elements
const documentUpload = document.getElementById('document-upload');
const scanButton = document.getElementById('scan-button');
const resultsContainer = document.querySelector('.results-container');
const reportTable = document.getElementById('report-table');

// Add event listener to the scan button
scanButton.addEventListener('click', scanDocument);

// Function to scan the document
function scanDocument() {
    // Get the uploaded file
    const file = documentUpload.files[0];

    // Check if a file is selected
    if (!file) {
        alert('Please select a file to scan');
        return;
    }

    // Simulate the scanning process (replace this with your actual scanning logic)
    const scanResults = scanFile(file);

    // Display the scan results
    displayScanResults(scanResults);
}

// Function to scan the file
function scanFile(file) {
    // TO DO: Implement your actual scanning logic here
    // For demonstration purposes, we'll return some sample data
    return [
        { type: 'Email', location: 'Page 1', actions: 'Remove' },
        { type: 'Phone Number', location: 'Page 2', actions: 'Mask' },
        { type: 'Address', location: 'Page 3', actions: 'Remove' },
    ];
}

// Function to display the scan results
function displayScanResults(results) {
    // Clear the previous results
    resultsContainer.innerHTML = '';
    if (reportTable.tBodies.length > 0) {
        reportTable.tBodies[0].innerHTML = '';
    }

    // Display the results
    results.forEach((result, index) => {
        const resultHTML = `
            <p>Result ${index + 1}:</p>
            <p>Type: ${result.type}</p>
            <p>Location: ${result.location}</p>
            <p>Recommended Actions: ${result.actions}</p>
            <hr>
        `;
        resultsContainer.insertAdjacentHTML('beforeend', resultHTML);

        // Add the result to the report table
        if (reportTable.tBodies.length > 0) {
            const row = reportTable.tBodies[0].insertRow();
            row.innerHTML = `
                <td>${result.type}</td>
                <td>${result.location}</td>
                <td>${result.actions}</td>
            `;
        }
    });
}