/*
 * You Do: Work through the following prompts. Write your code below each
 * comment.
 */

// 1. Get the element with an ID of 'first'

const first = document.getElementById('first');
console.log(first);

// 2. Now delete that first element (in the html file), and re-run your code.
//    What changed?

// Other than that first element being gone from the document, nothing much changed because there was another h1 element with an id of 'first'

// 3. Get the elements with a class of 'second' with getElementsByClassName:

const second = document.getElementsByClassName('second');
console.log(second);

// 4. Delete one of the elements with a class of 'second' and refresh the page.
//    Do you get a similar result?

// Yes, although the array has a length of 2 instead of 3 now

// 5. Get the span element using getElementsByTagname:

const span = document.getElementsByTagName('span');
console.log(span)

// 6. Add a span anywhere, and re-run the last piece of code. What's different?

// The new span element now shows up on the document, and the span array has an array of 3