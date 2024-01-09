let myMap = new Map();

function addToMap() {
    const keyInput = document.getElementById("keyInput").value.trim();
    const valueInput = document.getElementById("valueInput").value.trim();
    const outputDiv = document.getElementById("map");

    if (keyInput && valueInput) {
        myMap.set(keyInput, valueInput);
        outputDiv.innerHTML = `Element added to Map: Key - ${keyInput}, Value - ${valueInput}`;
    } else {
        outputDiv.innerHTML = "Please enter both key and value.";
    }
}

function accessMap() {
    const keyInput = document.getElementById("keyInput").value.trim();
    const outputDiv = document.getElementById("output");

    if (keyInput) {
        const value = myMap.get(keyInput);
        if (value !== undefined) {
            outputDiv.innerHTML = `Value for Key ${keyInput}: ${value}`;
        } else {
            outputDiv.innerHTML = `Key ${keyInput} not found in Map.`;
        }
    } else {
        outputDiv.innerHTML = "Please enter the key to access.";
    }
}

function checkKey() {
    const keyInput = document.getElementById("keyInput").value.trim();
    const outputDiv = document.getElementById("output");

    if (keyInput) {
        const keyExists = myMap.has(keyInput);
        if (keyExists) {
            outputDiv.innerHTML = `Key ${keyInput} exists in Map.`;
        } else {
            outputDiv.innerHTML = `Key ${keyInput} does not exist in Map.`;
        }
    } else {
        outputDiv.innerHTML = "Please enter the key to check.";
    }
}

// Arrow function
let multiply = (a, b) => a * b;

// Call method
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

function performOperations() {
    const multiplyInputA = parseInt(document.getElementById("multiplyInputA").value);
    const multiplyInputB = parseInt(document.getElementById("multiplyInputB").value);
    const fullNameCity = document.getElementById("fullNameCity").value.trim();
    const fullNameCountry = document.getElementById("fullNameCountry").value.trim();
    const outputDiv = document.getElementById("Function");

    // Arrow function
    const product = multiply(multiplyInputA, multiplyInputB);

    // Call method
    const fullName = person.fullName.call(person1, fullNameCity, fullNameCountry);

    // Display the results
    outputDiv.innerHTML = `<p>Arrow Function Result:</p>Product of ${multiplyInputA} and ${multiplyInputB} is = ${product}<br>
                           <p>Call Method Result:</p>${fullName}`;
}
