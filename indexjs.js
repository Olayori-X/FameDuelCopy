function toggleDarkMode() {
    const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');
    const lightModeStylesheet = document.getElementById('light-mode-stylesheet');
    const toggleButton = document.getElementById('toggle-mode');

    if (darkModeStylesheet.disabled) {
        darkModeStylesheet.disabled = false;
        lightModeStylesheet.disabled = true;
        localStorage.setItem("theme", "dark");
    } else {
        darkModeStylesheet.disabled = true;
        lightModeStylesheet.disabled = false;
        localStorage.setItem("theme", "light");
    }
    canvas();
}

function showMode(){
    const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');
    const lightModeStylesheet = document.getElementById('light-mode-stylesheet');
    const userPreferredTheme = localStorage.getItem("theme");
    
    if (userPreferredTheme === "dark") {
        darkModeStylesheet.disabled = false;
        lightModeStylesheet.disabled = true;
    }else{
        darkModeStylesheet.disabled = true;
        lightModeStylesheet.disabled = false;
    }
}




// document.addEventListener('DOMContentLoaded', canvas);
function canvas(){
    const canvas = document.getElementById('canvas');
    const canvasContext = canvas.getContext('2d');
    const downloadButton = document.getElementById('downloadButton');
    // const shareButton = document.getElementById('shareButton');
    var jokeText = canvas.innerHTML;
    

    
    if(localStorage.getItem("theme") === "light"){
        // Set canvas size and background color
        canvas.width = 800;
        canvas.height = 1000;
        canvasContext.fillStyle = 'lightblue';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        downloadButton.style.display = 'inline-block';
        // shareButton.style.display = 'block';
        // Set font properties
        // canvasContext.font = '40px Arial';
        canvasContext.fillStyle = 'black';
    }
    
    if(localStorage.getItem("theme") === "dark"){
        // Set canvas size and background color
        canvas.width = 800;
        canvas.height = 1000;
        canvasContext.fillStyle = '#333';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        downloadButton.style.display = 'block';
        // Set font properties
        canvasContext.fillStyle = '#ffcc00';
    }


    canvasContext.font = '40px Rockwell';

    // Define the maximum width for text wrapping
    const maxWidth = canvas.width - 40; // Leave some padding
    
    // Split the text into lines with word wrapping
    const lines = wordWrap(jokeText, maxWidth);

    // Calculate the vertical position for text centering
    const lineHeight = 50; // Adjust as needed
    const startY = (canvas.height - lines.length * lineHeight) / 2;

    // Draw each line of text
    lines.forEach((line, index) => {
        const lineY = startY + index * lineHeight;
        canvasContext.fillText(line, 20, lineY);
    });

    // ... (your existing code)

    // After drawing your existing text, add the "FameDuel" text
    const fameDuelText = "Fun Duel🏆";

    // Measure the width and height of the "FameDuel" text
    const fameDuelTextWidth = canvasContext.measureText(fameDuelText).width;
    const fameDuelTextHeight = 40; // Set the desired height for the "FameDuel" text

    // Calculate the coordinates for the bottom-right corner
    const fameDuelX = canvas.width - fameDuelTextWidth - 25; // Adjust for padding
    const fameDuelY = canvas.height - fameDuelTextHeight - 10; // Adjust for padding

    // Set the font and color for the "FameDuel" text
    canvasContext.font = '40px Baskerville Old Face';
    if(localStorage.getItem("theme") === "dark"){
        canvasContext.fillStyle = '#ffcc00';   
    }else{
        canvasContext.fillStyle = 'black';
    }

    // Draw the "FameDuel" text at the calculated coordinates
    canvasContext.fillText(fameDuelText, fameDuelX, fameDuelY);


    // Function to word wrap text within a specified width
    function wordWrap(text, maxWidth) {
        const words = text.split(' ');
        let line = '';
        const lines = [];

        for (const word of words) {
            const testLine = line + word + ' ';
            const testWidth = canvasContext.measureText(testLine).width;

            if (testWidth > maxWidth) {
                lines.push(line);
                line = word + ' ';
            } else {
                line = testLine;
            }
        }

        lines.push(line);
        return lines;
    }

     // Add a click event listener to the "Download" button
     downloadButton.addEventListener('click', () => {
        // Set the download link href to the canvas data URL
        downloadButton.href = canvas.toDataURL('image/jpeg');
    });
    
}



    // Show the "Share" and "Download" buttons
    

function submitForm(){
    console.log("hello");
    var form = document.getElementById("votingForm");

    // Get all radio buttons with the name "gender"
    var radios = form.elements["option"];

    // Loop through the radio buttons to find the selected one
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            var selectedValue = radios[i].value;
            break; // Exit the loop once a selected radio button is found
        }
    }

    var radioButtons = document.querySelectorAll('input[name="option"]');
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        contestant_image = radioButtons[i].getAttribute('data-img-src');
        // document.getElementById("chosenimage").value = contestant_image;
        break; // Exit the loop when the selected radio button is found
      }
    }

    let value = {
        'selectedUsername' : selectedValue,
        'selectedPicture' : contestant_image,
    }

    fetch('server/submit_vote.php', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json; charset=utf-8"
        },
        "body" : JSON.stringify(value)
    }).then(response => response.json())
    .then(data => {
        console.log(data);
        canvas(data.joke);
    })
}


function closeDiv(element){
    var div = document.getElementById(element);
    if(div.style.display == "block"){
        div.style.display = "none";
    }else{
        div.style.display = "block";
    }
}



function countvote(){
    fetch('server/votecount.php', {
        method : 'GET',
        cache : 'no-cache',
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('count1').innerHTML = data[0];
        document.getElementById('count2').innerHTML = data[1];
        document.getElementById('rank3').style.width = data[2] + "%";
        document.getElementById('rank4').style.width = data[3] + "%";
    })
}