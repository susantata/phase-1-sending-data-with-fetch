// Add your code here
// For appending id number to appear on the page.
const body = document.querySelector("body");

function submitData (uName, uEmail){
	
	
	const userData = {
		name: uName,
		email: uEmail
	};
	
	const handleUserData = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		
		body: JSON.stringify(userData),
	};
	
	
	let action = fetch("http://localhost:3000/users", handleUserData)
	.then(resp => resp.json())
	.then(json => {
		body.append(json.id);
	})
	.catch( error => {
		alert("A bug detected!!");
		body.append(error);
    });
    return action;
}