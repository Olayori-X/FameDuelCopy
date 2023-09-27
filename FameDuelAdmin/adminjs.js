function getVotes(){
    fetch('admingetvotes.php')
    .then(response => response.json())
    .then(data => {
        document.getElementById('countone').innerHTML = data[0];
        document.getElementById('counttwo').innerHTML = data[1];
        document.getElementById('total').innerHTML = data[2];
    })

    fetch('getcontestants.php')
    .then(response => response.json())
    .then(data => {
        document.getElementById('contestantone').innerHTML = data[0];
        document.getElementById('contestanttwo').innerHTML = data[1];
    })
}