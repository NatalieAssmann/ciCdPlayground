import App from './App.svelte';

new App({
	target: document.body,
	props: {
		// What's your name?
		name: 'Natalie Assmann',
		// In the following fiels you can either give a single string, 
		// or an array of bullet points
		
		// What do you associate with the term 'CI/CD'?
		associations: [
			'pipeline'
		],
		// Which CI/CD tools do you use in your project?
		tools: 'Tekton',
		// What do you want to learn in this workshop? 
		expectations: [
			'How is this working in general and what tools are there?'
		],
		// What do you like to do when you're not coding?
		hobbies: [
			'Cuddle my parrot', 
			'Paragliding', 
			'Playstation'
		]
	}
});
