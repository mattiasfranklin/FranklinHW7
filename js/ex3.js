// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

//Initializes vars for the input box suggestions
const inputBox = document.getElementById("country");
const suggestionsText = document.getElementById("suggestions");

// Creates function to update the suggestions based on text in input box
const updateSuggestions = () => {
  //Initializes a var for what is currently written in input box and an array for matching countries
  const userInput = inputBox.value.toLowerCase();
  const filteredCountries = [];

  //Adds countries to the array if they start with the user input
  countryList.forEach(country => {
    if (country.toLowerCase().startsWith(userInput))
      filteredCountries.push(country);
  });

  // Clear previous suggestions
  suggestionsText.innerHTML = "";

  // Display filtered countries as suggestions, sets each one to suggestion class for styling
  filteredCountries.forEach(country => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion");
    suggestionItem.textContent = country;

    // Event listener to replace input value when suggestion is clicked (add val delete suggestions)
    suggestionItem.addEventListener("click", () => {
      inputBox.value = country;
      suggestionsText.innerHTML = "";
    });

    //Display Suggestions
    suggestionsText.appendChild(suggestionItem);
  });
};

// Event listener for input changes to input box to update suggestions
inputBox.addEventListener("input", updateSuggestions);