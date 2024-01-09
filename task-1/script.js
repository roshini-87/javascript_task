function performNumberMethods() {
    // Get user input
    let userNumber = parseFloat(document.getElementById('userNumber').value);

    // Check if the input is a valid number
    if (isNaN(userNumber)) {
        alert('Please enter a valid number.');
        return;
    }

    // Number methods
    let roundedNumber = userNumber.toFixed(2);
    let integerNumber = parseInt(userNumber);

    // Display results
    document.getElementById('number').innerHTML = `
        <p>Original Number: ${userNumber}</p>
        <p>Rounded Number: ${roundedNumber}</p>
        <p>Integer Number: ${integerNumber}</p>
    `;
}
function performStringMethods() {
    // Get user input
    let userInput = document.getElementById('userString').value;

    // Check if the input is not empty
    if (userInput.trim() === "") {
        alert('Please enter a valid string.');
        return;
    }

    // String methods
    let upperCaseString = userInput.toUpperCase();
    let char = userInput.charAt(0);
    let slicedString = userInput.slice(0, 5);

    // Display results
    document.getElementById('string').innerHTML = `
        <p>Original String: ${userInput}</p>
        <p>Uppercase String: ${upperCaseString}</p>
        <p>Sliced String: ${slicedString}</p>
        <p>specified index in a string: ${char}</p>
    `;
}
function performArrayMethods() {
    // Get user input
    let userInput = document.getElementById('userArray').value;

    // Check if the input is not empty
    if (userInput.trim() === "") {
        alert('Please enter a valid array (comma-separated values).');
        return;
    }

    // Convert the user input to an array
    let userArray = userInput.split(',');

    // Array methods
    let arrayLength = userArray.length;  
    let shiftedElement = userArray.shift();  

    document.getElementById('array').innerHTML = `
        <p>Original Array: ${userInput}</p>
        <p>Array length: ${arrayLength}</p>
        <p>Shifted Element: ${shiftedElement}</p>
        <p>Array after shift: ${userArray.join(', ')}</p>
    `;
}
// Function to check the day of the week
function switchcase() {
    // Get user input
    var userInput = prompt("Enter a day of the week:").toLowerCase();
    switch (userInput) {
        case "monday":
            alert("It's the first day of the week.");
            break;
        case "tuesday":
            alert("It's the second day of the week.");
            break;
        case "wednesday":
            alert("It's the third day of the week.");
            break;
        case "thursday":
            alert("It's the fouth day of the week.");
            break;
        case "friday":
            alert("It's Friday! The weekend is almost here.");
            break;
        case "saturday":
            alert("It's the weekend!");
            break;
        case "sunday":
            alert("It's the weekend!");
            break;
        default:
            alert("Invalid input or not a day of the week.");
            break;
    }
}

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    // Get user input
    var userInput = prompt("Enter a number:");
    var userNumber = parseFloat(userInput);
    if (isNaN(userNumber)) {
        alert("Invalid input. Please enter a valid number.");
    } else {
        if (userNumber > 0) {
            alert("The number is positive.");
        } else if (userNumber < 0) {
            alert("The number is negative.");
        } else {
            alert("The number is zero.");
        }
    }
}
function runLoops() {
    const startValueInput = document.getElementById("startValue");
    const endValueInput = document.getElementById("endValue");
    const arrayLengthInput = document.getElementById("arrayLength");
    const outputDiv = document.getElementById("output");

    const startValue = parseInt(startValueInput.value);
    const endValue = parseInt(endValueInput.value);
    const arrayLength = parseInt(arrayLengthInput.value);

    if (!isNaN(startValue) && !isNaN(endValue) && startValue < endValue && !isNaN(arrayLength) && arrayLength > 0) {
        let i = startValue;
        let resultWhileLoop = "";
        let resultForLoop = "Array Values:";

        // While loop from startValue to endValue
        while (i < endValue) {
            resultWhileLoop += i + "<br>";
            i++;
        }

        // For loop for array input
        const userArray = [];
        for (let j = 0; j < arrayLength; j++) {
            const userInput = prompt(`Enter value for index ${j}:`);
            const parsedValue = parseInt(userInput);

            if (!isNaN(parsedValue)) {
                userArray.push(parsedValue);
            } else {
                alert("Invalid input. Please enter a valid numerical value.");
                return;
            }
        }

        userArray.forEach(value => {
            console.log(value);
            resultForLoop += "<br>" + value;
        });

        // Display the results in the output div
        outputDiv.innerHTML = `<p>While Loop Result:</p>${resultWhileLoop}<p>${resultForLoop}</p>`;
    } else {
        // Display an error message if input is invalid
        outputDiv.innerHTML = "Invalid input";
    }
}
// Base class Animal
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        return `${this.name} says ${this.sound}`;
    }

    // Static method to create an Animal from user input
    static createFromInput(nameInput, soundInput) {
        return new Animal(nameInput, soundInput);
    }
}

// Derived class Dog inheriting from Animal
class Dog extends Animal {
    }

// Function to create an Animal and display its sound
function createAnimal() {
    const nameInput = document.getElementById("animalName").value;
    const soundInput = document.getElementById("animalSound").value;
    const outputDiv = document.getElementById("class");

    if (nameInput && soundInput) {
        // Create an Animal using the static method
        const newAnimal = Animal.createFromInput(nameInput, soundInput);

        // Display the sound of the created Animal
        outputDiv.innerHTML = newAnimal.makeSound();
    } else {
        outputDiv.innerHTML = "Please enter both animal name and sound.";
    }
}
