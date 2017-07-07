"use strict";

/*
	This is a challenge given to me by Gilbert Diaz. 
	Given a list of contacts, create a function that accepts two args: firstName, and prop
	If the name does not exist in contacts, console log the err
	Else, check if the property exists for the given contact.
	If the property exists, return the value of that property
	Else, console log the err
*/


// List of contacts
const contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

// Basic filter function that returns the contact if the name exists in the 
// contacts list
let checkContact = (firstName) => {
	let contactArr = contacts.filter((contact) => contact.firstName.toLowerCase() === firstName.toLowerCase());
	if (contactArr.length > 0) {
		return contactArr[0];
	} else {
		console.log('No such contact');
		return false;		
	}
};

// Function that checks if a property exists for a given object
let checkProp = (prop, contact) => {
	if (contact.hasOwnProperty(prop)) {
		console.log(contact[prop]);
		return contact[prop];
	} else {
		console.log('No such property');
	}
}

// Original function to design.
// Calls both checkContact and checkProp
let lookUpProfile = (firstName, prop) => {
	let contact = checkContact(firstName);
	if (contact) {
		checkProp(prop, contact);
	} else return;
};

// --> 'Vos'
lookUpProfile('Kristian', 'lastName');
//  --> ["Intriguing Cases", "Violin"]
lookUpProfile('Sherlock', 'likes');
//  --> ["Hogwarts", "Magic", "Hagrid"]]
lookUpProfile('Harry', 'likes');
// --> false (err) => 'No such contact'
lookUpProfile('Bob', 'number');
// --> false (err) => 'No such property'
lookUpProfile('Akira', 'address');














