function mapreduce(){  
const numericList = [8, 4, 2, 7, 1, 9, 5, 3, 10, 6];
const outputDiv = document.getElementById("SortMapReduce");

        // Sorting the original list
        let sortedList = numericList.slice().sort((a, b) => a - b);
        // document.write("<p>Sorted List: " + sortedList.join(', ') + "</p>");

        // Adding one using map
        let modifiedArr = numericList.map(i => i + 1);
        // document.write("<p>Modified List (using map): " + modifiedArr.join(', ') + "</p>");

        // Adding one using reduce
        const modifiedListReduce = numericList.reduce((acc, value) => {
            acc.push(value + 1);
            return acc;
        }, []);
        // document.write("<p>Modified List (using reduce): " + modifiedListReduce.join(', ') + "</p>");
        outputDiv.innerHTML = `<p>Sorted list:</p>${sortedList}<br>
        <p>Modified List Using Map:</p>${modifiedArr}<br>
        <p>Modified List Using Reduce:</p>${modifiedListReduce}`;
    }
    function manipulateArray() {
        let inputArray = ["apple", "orange", "kiwi", "jack", "dragon"];
        
        // Separate even and odd index values
        let evenIndexValues = [];
        let oddIndexValues = [];
      
        for (let i = 0; i < inputArray.length; i++) {
          if (i % 2 === 0) {
            evenIndexValues.push(inputArray[i]);
          } else {
            oddIndexValues.push(inputArray[i]);
          }
        }
      
        // Remove odd index values
        let modifiedArray = inputArray.filter((element, index) => index % 2 === 0);
        let Removeoddindex = modifiedArray;
      
        // Display only even index values
        let a = [];
        for (let i = 0; i < inputArray.length; i += 2) {
          a.push(inputArray[i]);
        }
      
        // Add two more string values after the 3rd index
        let Add_values = [...inputArray];
        Add_values.splice(3, 0, "fig", "grape");
      
        // Sort the string values in ascending order
        let ascending_order = [...inputArray];
        ascending_order.sort();
      
        const outputDiv = document.getElementById("array");
      
        outputDiv.innerHTML = `<p>Original List:</p>${inputArray}
          <p>Only even index values:</p>${evenIndexValues}
          <p>Only odd index values:</p>${oddIndexValues}
          <p>Remove odd index:</p>${Removeoddindex}<br>
          <p>Only even index values:</p>${a}
          <p>Add two values after 3rd index:</p>${Add_values}<br>
          <p>Sorted list:</p>${ascending_order}<br>
        `;
      }
    
      