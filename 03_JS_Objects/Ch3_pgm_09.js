// Concatenating string properties

var book1;
var book2;
var book3;

book1 = {
	title: "The Hobbit",
	author: "J. R. R. Tolkien"
};

book2 = {
	title: "Northern Lights",
	author: "Philip Pullman"
};


book3 ={
	title: "light",
	author: "zoya",
	published: 1990
};


console.log(book1.title + " by " + book1.author);
console.log(book2.title + " by " + book2.author);
console.log(book3.title + " by " + book3.author + ", established on " + book3.published);


/* Further Adventures
 *
 * 1) Add a third book.
 *
 * 2) Log its details to the console.
 *
 * 3) Add a third property.
 *
 * 4) Update the messages logged to include the
 *    new property.
 *
 */