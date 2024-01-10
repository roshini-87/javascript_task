function manipulateDictionary() {
    // Ensure the list has 3 dictionaries
    let dictionaryList = [
      { firstname: 'john', lastname: 'us', selected: false },
      { firstname: 'hari', lastname: 'm', selected: true },
      { firstname: 'maha', lastname: 'r', selected: false }
    ];
  
    // Iterate the list and display each dictionary
    let output = '<p>Original List:</p>';
    for (let i = 0; i < dictionaryList.length; i++) {
      output += `<p>Dictionary ${i + 1}:</p>`;
      for (const key in dictionaryList[i]) {
        output += `<p>${key}: ${dictionaryList[i][key]}</p>`;
      }
    }
  
    // Find and display the dictionary with key "selected" and value true
    let selectedDictionary = dictionaryList.find(dict => dict.selected === true);
    if (selectedDictionary) {
      output += '<p>Dictionary with "selected: true":</p>';
      for (const key in selectedDictionary) {
        output += `<p>${key}: ${selectedDictionary[key]}</p>`;
      }
    } else {
      output += '<p>No dictionary with "selected: true" found.</p>';
    }
  
    // Display the result in the HTML
    document.getElementById('output').innerHTML = output;
  }
function dynamicfunction(){
  const listOfDictionaries = [];

// Dynamic function to add a dictionary to the list
function addDictionaryToTheList() {
  if (listOfDictionaries.length < 10) {
    // Add a dictionary to the list
    const newDictionary = {
      // key1: "value1",
      // key2: "value2",
    };

    // Example of adding more key-value pairs dynamically
    for (let i = 0; i <= 5; i++) {
     newDictionary[`key${i}`] = `value${i}`;
    }

    listOfDictionaries.push(newDictionary);
    console.log("Dictionary added successfully!");
  } else {
    console.log("List is already at its maximum length (10 dictionaries).");
  }
}

// Test the function to add dictionaries until the list reaches 10
for (let i = 0; i < 11; i++) {
  addDictionaryToTheList();
}

// Display the final list of dictionaries
console.log("Final List of Dictionaries:", listOfDictionaries);
}