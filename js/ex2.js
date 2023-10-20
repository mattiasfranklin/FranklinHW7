const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };
  

  // Function to fill the house dropdown list during page load with options from 'houses' array
const fillHouseDropdown = () => {
  const houseDropdown = document.getElementById("house");

  houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.text = house.name;
    houseDropdown.appendChild(option);
  });

  // Event listener for house selection
  houseDropdown.addEventListener("change", () => {
    const currentHouseCode = houseDropdown.value;
    const charactersArray = getCharacters(currentHouseCode);
    displayCharacters(charactersArray);
  });
};

// Function to display characters in the characters list
const displayCharacters = characters => {
  // Intializes <ul> to fill and clears previous list of characters
  const charactersList = document.getElementById("characters");
  charactersList.innerHTML = "";

  characters.forEach(character => {
    const listItem = document.createElement("li");
    listItem.textContent = character;
    charactersList.appendChild(listItem);
  });
};

// Event listener for page load to fill the house dropdown
window.addEventListener("load", fillHouseDropdown);