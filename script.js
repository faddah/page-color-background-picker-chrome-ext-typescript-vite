console.log(`TypeScript & JavaScript are loaded`);

const t = document.querySelector('title');
const h1 = document.querySelector('.page-title');
const pageTitle = `Page Background Color Picker Extension`;
t.textContent = pageTitle;
h1.textContent = "Hello!";

async function sayHello() {
	let [tab] = await chrome.tabs.query({ active: true });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: () => {
			// document.body.style.backgroundColor = 'red';
			console.log('Hello from my extension!');
			alert('Hello from my extension!');
		},
	});
}

document.querySelector('#myButton').addEventListener('click', sayHello);