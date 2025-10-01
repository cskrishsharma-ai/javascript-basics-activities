// Activity 6: String Operations in JavaScript

// 1. Concatenation
let first = "Ashu";
let last = "Sharma";
let fullname = first +" "+last;
console.log("Full Name:",fullname);

// 2. Length
let message = "Hello World";
console.log("Length:", message.length);

// 3. Case changing
console.log("Uppercase:", message.toUpperCase());
console.log("Lowercase:", message.toLowerCase());

// 4. Indexing and Slicing
console.log("First character:",message[0]); // H
console.log("Substring (0-5):",message.substring(0,5)); // Hello

// 5. Search and Replace
console.log("Index of 'World':",message.indexOf("World"));
console.log("Replace:",message.replace("World","JavaScript"));

// 6. Trim (remove spaces)
let text = "  hello  ";
console.log("Before trim:",text);
console.log("After trim:",text.trim());


