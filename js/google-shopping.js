// Require is a node-specific thing, so run
// your file in the terminal with the node command!
// e.g., node js/google-shopping.js
let data = require('../products.json')

// This is a print out of all the items in the data
// console.log(data.items)

// Next, it's recommended to just look at the first item
console.log(data.items[0])

// YOUR CODE BELOW
// 1.) Go through the `items` and find all results that have `kind` of
// `shopping#product`. Print the count of these results. Where else is
// this count information stored in the search results?

console.log('\nProblem 1:\n')

// console.log(data.items)

let kindCount = 0;

for (let i = 0; i < data.items.length; i++) {
    if (data.items[i]["kind"]) {
    //   console.log(data.items[i]);
        kindCount++;
    };
}

console.log(kindCount);

console.log('\n The very beginning of the document lists:\n  "currentItemCount": 25')

// 2.) Print the `title` all items with a `backorder` availability
// in `inventories`.

console.log('\nProblem 2:\n')

for (let j = 0; j < data.items.length; j++) {
    if (data.items[j].product.inventories[0].availability === "backorder") {
       console.log(data.items[j].product["title"] + "\n");
    };
}

// 3.) Print the `title` all items with more than one image link.

console.log('\nProblem 3:\n')

for (let k = 0; k < data.items.length; k++) {
    if (data.items[k].product.images[1]) {
        for (let p = 0; p < data.items[k].product.images.length; p++)
            console.log(data.items[k].product["title"] + "\n");
    };
}

// 4.) Print all "Canon" products in the items
// HINT: careful with case sensitivity!

console.log('\nProblem 4:\n')

for (let q = 0; q < data.items.length; q++) {
    if (data.items[q].product.brand === "Canon") {
        console.log(data.items[q].product["title"] + "\n");
    };
}

// 5.) Print all `items` that have an author name of "eBay" and are
// brand "Canon".
// HINT: What is the type of author?

console.log('\nProblem 5:\n')

for (let w = 0; w < data.items.length; w++) {
    if (data.items[w].product.author.name.includes("eBay") && data.items[w].product.brand === "Canon") {
        console.log(data.items[w] + "\n");
    };
}

// 6.) Print all the products with their **brand**, **price**,
// and an **image link**
// HINT: You can just use the first (0th) element in the images
// and inventories arrays.

console.log('\nProblem 6:\n')

for (let r = 0; r < data.items.length; r++) {
    console.log(data.items[r].product["brand"] + "\n" + data.items[r].product.inventories[0] + "\n" + data.items[r].product.images[0]);
}

