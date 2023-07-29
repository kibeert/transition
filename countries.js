function populateCountriesSelect() {
    const countries = [
        // Add all countries here (you can get the list from a separate API or data source)
        "Afghanistan", "Albania", "Algeria", /* ... */ "Zimbabwe"
    ];

    const selectElement = document.getElementById('countriesSelect');

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        selectElement.appendChild(option);
    });
}

// Call the function to populate the select input
populateCountriesSelect();