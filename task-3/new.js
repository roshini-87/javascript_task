function processList(){  
const numericList = [8, 4, 2, 7, 1, 9, 5, 3, 10, 6];

        // Sorting the original list
        let sortedList = numericList.slice().sort((a, b) => a - b);
        document.write("<p>Sorted List: " + sortedList.join(', ') + "</p>");

        // Adding one using map
        let modifiedArr = numericList.map(i => i + 1);
        document.write("<p>Modified List (using map): " + modifiedArr.join(', ') + "</p>");

        // Adding one using reduce
        const modifiedListReduce = numericList.reduce((acc, value) => {
            acc.push(value + 1);
            return acc;
        }, []);
        document.write("<p>Modified List (using reduce): " + modifiedListReduce.join(', ') + "</p>");
    }