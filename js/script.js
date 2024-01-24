const container = document.querySelector('#container')

const paragraph = document.createElement('p');
paragraph.style.color = 'red';
paragraph.textContent = `Hey I'm red`;
container.appendChild(paragraph);

const heading = document.createElement('h3');
heading.style.color = 'blue';
heading.textContent = `I'm a blue h3`;
container.appendChild(heading)

const div = document.createElement('div');
div.style.cssText = 'border: 1px solid #000; backgroundColor: pink;';
container.appendChild(div);
// div.classList.add('new');

const headingOne = document.createElement('h1');
headingOne.textContent = `I'm in a div`
div.appendChild(headingOne)

const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = `ME TOO!`;
div.appendChild(paragraphTwo);

