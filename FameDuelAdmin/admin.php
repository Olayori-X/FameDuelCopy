<?php
session_start();
    if(isset($_SESSION["Username"])){
        $username = $_SESSION["Username"];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel</title>
    <!-- Bootstrap CSS link -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <script src = "adminjs.js"></script>
</head>
<body onload = "getVotes()">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Fame Duel Admin Panel</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="admin.php">Dashboard</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Users</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                </li>
                <li class="nav-item">
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Settings
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="adminaddcontestants.php">Add Contestants</a>
                            <a class="dropdown-item" href="delete.php">Delete Contestants</a>
                            <a class="dropdown-item" href="#">Option 3</a>
                        </div>
                    </div>
                </li>
            </ul>
            <li class="nav-item">
                <a class="nav-link" href="adminlogout.php">Log Out</a>
            </li> 
        </div>
    </nav>

    <div class="container mt-4">
        <!-- Dashboard Content -->
        <h1>Dashboard</h1>
        <div class="row">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Users</h5>
                        <p class="card-text">250</p>
                    </div>
                </div>
            </div>
           
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Total Votes</h5>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="card-text" id = "total">500</p>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <p class="card-text" id = "contestantone"></p>
                                        <span id = "countone"></span>
                                    </div>
                                    
                                    <div class="col-md-6">
                                        <p class="card-text" id = "contestanttwo"></p>
                                        <span id = "counttwo"></span>
                                    </div>
                                </div>
                          </div>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="mt-4">Recent Activities</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>User</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2023-08-15</td>
                    <td>User1</td>
                    <td>Logged in</td>
                </tr>
                <tr>
                    <td>2023-08-14</td>
                    <td>User2</td>
                    <td>Added a product</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
<?php
    }else{
        header("Location: adminlogin.php");
    }
?>