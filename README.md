
1.Number methods:

    toString()- Returns a number as a string 
    toExponential()- Returns a number written in exponential notation 
    toFixed()- Returns a number written with a number of decimals
    toPrecision()- Returns a number written with a specified length 
    ValueOf()- Returns a number as a number
    Number()- used to convert JavaScript variables to numbers
    parseInt()- returns a whole number
    parseFloat()- returns a number

2.String Methods:

    String length - returns the length of a string
    String charAt()- returns the character at a specified index (position) in a string
    String at()- returns an indexed element from a string
    String slice()- extracts a part of a string and returns the extracted part in a new string
    String substr() - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
    String toUpperCase()
    String toLowerCase() 
    String concat()- joins two or more strings
    String trim() - String trimStart() ,String trimEnd()-  removes whitespace from both sides of a string
    String repeat()- returns a string with a number of copies of a string.
    String replace()- replaces a specified value with another value in a string. Replaces only the first match.
    String replaceAll()- replaces all the match
    String split()

3.Array Methods:

    Array length- returns the length (size) of an array
    Array toString()- converts an array to a string of (comma separated) array values
    Array at()- returns an indexed element from an array 
    Array join()- method also joins all array elements into a string. It behaves just like toString(), but in addition you can specify the separator. 
    Array pop()- removes the last element from an array 
    Array push()- adds a new element to an array (at the end) 	
    Array shift()- removes the first array element and "shifts" all other elements to a lower index
    Array unshift()- adds a new element to an array (at the beginning)
    Array concat()- creates a new array by merging (concatenating) existing arrays
    Array copyWithin()- copies array elements to another position in an array 
    Array splice()- adds new items to an array
    Array slice()- slices out a piece of an array into a new array

4.Statements:

    If - to specify a block of code to be executed, if a specified condition is true
    If-else -  to specify a block of code to be executed, if the same condition is false
    Switch -  specify many alternative blocks of code to be executed.
    else-if - to specify a new condition to test, if the first condition is false.

5.Looping conditions:

    For Loop: 
        The for loop is used when you know in advance how many times the loop should run.
    While Loop:
                                    The while loop is used when the number of iterations is not known in   
                        advance, and the loop continues as long as the specified condition is true. 
    Do-While Loop: 
            Similar to the while loop, but it always executes the block of code at least once before checking the condition.
    Break and Continue Statements: 
            The break statement is used to exit a loop prematurely, and the continue statement is used to skip the rest of the code inside a loop for the current iteration. 
    Looping through Arrays: 
            You can use loops to iterate through elements in an array.  
    For...in Loop: 
                The for...in loop is used to iterate over the properties of an object. 

6.Maps:

    new Map() - Creates a new Map object 
    set()- Sets the value for a key in a Map 
    get() - Gets the value for a key in a Map
    clear() - Removes all the elements from a Map 
    delete() - Removes a Map element specified by a key 
    has() -	Returns true if a key exists in a Map 
    forEach() - Invokes a callback for each key/value pair in a Map 
    entries() - Returns an iterator object with the [key, value] pairs in a Map
    keys() - Returns an iterator object with the keys in a Map 
    values() - Returns an iterator object of the values in a Map
    Size - Returns the number of Map elements

7.functions:

    defined with the function keyword
    The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument (parameter).
    With the apply() method, you can write a method that can be used on different objects.
    The call() method takes arguments separately. 
    The apply() method takes arguments as an array.
    With the bind() method, an object can borrow a method from another object.
    Arrow function- let multiply = (a, b) => a * b;

8.classes:

    Use the keyword class to create a class.
    Always add a constructor() method.
    a class inheritance, use the extends keyword.
    To add getters and setters in the class, use the get and set keywords.
    Static class methods are defined on the class itself. 
    You cannot call a static method on an object, only on an object class.
