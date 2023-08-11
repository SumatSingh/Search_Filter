// Get the search input element
const searchInput = document.getElementById('searchInput');

// Get all <li> items in the list
const listItems = document.querySelectorAll('.cards');

// Listen for the 'input' event on the search input
searchInput.addEventListener('input', function () {
    // Get the search term and convert it to lowercase
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through each <li> item in the list
    listItems.forEach(item => {
        // Get the text of the item and convert it to lowercase
        const text = item.textContent.toLowerCase();

        // If the item's text supports the search term, display it
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            // Otherwise, hide it
            item.style.display = 'none';
        }
    });
});
