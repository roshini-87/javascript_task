function processString() {
    const inputString = document.getElementById("inputString").value.trim();
    const outputDiv = document.getElementById("string");

    if (inputString.length === 10) {
        const stringWithDollars = inputString.match(/.{1}/g).join('$');

        // Arrange the string into alphabetical order
        const alphabeticalOrder = inputString.split("").sort();

        // Display the results
        outputDiv.innerHTML = `<p>Original String:</p>${inputString}<br>
                              <p>String with $ after each word:</p>${stringWithDollars}<br>
                              <p>Alphabetical Order:</p>${alphabeticalOrder}`;
    } else {
        outputDiv.innerHTML = "Please enter a string with a length of 10.";
    }
}

function generateRandomIntegersAndDivide() {
    // Generate two random integers between 1 and 100
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;

    // Perform division
    const divisionResult = num1 / num2;

    // Format the result based on whether it is a whole number or decimal
    const formattedResult = Number.isInteger(divisionResult)
        ? divisionResult
        : divisionResult.toFixed(2);

    // Display the results
    const outputDiv = document.getElementById("int");
    outputDiv.innerHTML = `<p>Generated Random Integers: ${num1}, ${num2}</p>
                           <p>Division Result: ${formattedResult}</p>`;
}


