for (let i = 0; i < 5; i++) {
    console.log(i);
}
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// let j = 1;
// do {
//     console.log(j);
//     i++;
// } while (j < 5);


// Looping through arrays:

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Looping through objects:

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

for (let i = 1; i <= 10; i++)
 { if (i === 5) 
   { break; // Exit the loop when i is 5 
   }
 if (i % 2 === 0) 
    { continue; // Skip even numbers 
    }
     console.log(i); 
} 
