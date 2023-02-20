/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first' using querySelector

const firstQS = document.querySelector('#first');
console.log(firstQS);

// 2. Get the elements with a class of 'second' with querySelector

const secondQS = document.querySelector('.second');
console.log(secondQS);

// 3. Try the above prompt with querySelectorAll. What's the difference between what these two methods return?

const secondQSA = document.querySelectorAll('.second');
console.log(secondQSA);

// querySelector returns one node, the first one it finds.
// querySelectorAll returns a list of nodes that match the query.

// 4. Get the span element using querySelector

const spanQS = document.querySelector('span');
console.log(spanQS);

// 5. Get multiple span elements using querySelectorAll

const spanQSA = document.querySelectorAll('span');
console.log(spanQSA);

// 6. Select only "a" tags *directly inside* of a div (no grandchildren).

const aQSA = document.querySelectorAll("div > a")
console.log(aQSA)

// 7. Select all elements that contain a "data-target" attribute

const dataTargetQSA = document.querySelectorAll("[data-target]");
console.log(dataTargetQSA);

// 8. Select all elements where the data-target attribute equals "#false"

const dataTargetFalseQSA = document.querySelectorAll("[data-target = '#false']");
console.log(dataTargetFalseQSA);