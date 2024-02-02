import App from './App.svelte'; // Imports svelte components

var app = new App({ // Where svelte components are mounted
	target: document.body
});

export default app; // I can export my components from any use them like a class in CSS styling