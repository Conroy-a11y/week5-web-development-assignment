

// part4.js No 1
const heading = document.getElementById('myHeading');
console.log(heading.textContent)//prints the contents of heading element
//part4.js No 2
const paragraph = document.querySelector('.para');
paragraph.textContent = 'Hello, JavaScript'
console.log(paragraph.textContent)//prints the contents of paragraph element

//part4.js No 3
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    button.style.backgroundColor = 'yellow';
}); 