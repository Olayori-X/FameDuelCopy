function autocomplete(input) {

	//Add an event listener to compare the input value with all countries
	input.addEventListener('input', function () {
		//Close the existing list if it is open
		closeList();
		//searchInput();

		//If the input is empty, exit the function
		if (!this.value){

			return;

		}else{

			//Create a suggestions <div> and add it to the element containing the input field
			suggestions = document.createElement('div');
			suggestions.setAttribute('id', 'suggestions');
			this.parentNode.appendChild(suggestions);

            fetch('server/getdetails.php')
            .then(response => response.json())
            .then(data => {
                // Process the data
                var globalArray = data; // Assign data to the global variable
                // console.log(globalArray); // You can use the data here or call another function
                for(var i = 0; i < globalArray.length; i++){
                    if (globalArray[i].Username.toUpperCase().includes(input.value.toUpperCase())) {
            
                        //If a match is found, create a suggestion <div> and add it to the suggestions <div>
                        suggestion = document.createElement('div');
                        suggestion.innerHTML = globalArray[i].Username;
                        
                        suggestion.addEventListener('click', function () {
                            input.value = this.innerHTML;
                            closeList();
                        });
                        suggestion.style.cursor = 'pointer';
                        
            
                        suggestions.appendChild(suggestion);
                    }
                }
            })
            .catch(error => console.error('Error fetching data:', error));

		}

	});

    function closeList() {
		let suggestions = document.getElementById('suggestions');
		if (suggestions)
			suggestions.parentNode.removeChild(suggestions);
	}
}

function sendinvite(){
    value = {
        "challenger" : document.getElementById('challenger').value,
        "challengerpic" : document.getElementById('challengerpic').value,
        "inviteduser" : document.getElementById('search').value
    }
    fetch('server/invite.php', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json; charset=utf-8"
        },
        "body" : JSON.stringify(value)
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        //Work on the data here
    })
}