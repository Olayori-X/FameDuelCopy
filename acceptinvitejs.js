data = {
    'current_username' : 'Olayori'
}
fetch('server/checkinvites.php', {
    'method' : 'POST',
    'headers' : {
        'Content-Type' : 'application/json; charset=utf-8'
    },
    'body' : JSON.stringify(data)
})
.then(response => response.text())
.then(data => {
    // console.log(data.data[1].contestid);
    console.log(data);
    // var hello = '';
    // for($i=0; $i < data.length; $i++){
    //     hello += "<input type = 'hidden'  value = '" + data.data[1].contestid + "' id = " + data.data[1].contestid + "'>";
    //     //Continue the code to fetch invites
    // }
})

function acceptinvite(){
    value = {
        "contestid" : 'document.getElementById(contestid).value',
        "inviteepic" : 'document.getElementById().value',
    }
    fetch('server/acceptinvites.php', {
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