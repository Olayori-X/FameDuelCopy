<?php
//This code validates if an email or a username input ny the user is correct, if they want to change their password
    include 'connect.php';
    include "validate.php";
    
    if($_SERVER['REQUEST_METHOD'] === "POST"){
        $values = json_decode(file_get_contents("php://input"), true);

        $userinput = validate($values['userinput']);

        if(empty($userinput)){
            $response = [
                "response" => "Error",
                "message" => "User need to input their username or email"
            ];
        }
        else{
            $check = "SELECT * FROM users WHERE username = ? OR email = ?";

            $preparecheckstmt = mysqli_prepare($connect, $check);
            mysqli_stmt_bind_param($preparecheckstmt, "s", $userinput);

            $executecheckstmt = mysqli_stmt_execute($preparecheckstmt);
            if($executecheckstmt){
                $confirm = mysqli_stmt_get_result($preparecheckstmt);

                if (mysqli_num_rows($confirm) >= 1) {
                    
                    while($row = mysqli_fetch_assoc($confirm)){
                        unset($row['id']);
                        unset($row['password']);
                        
                        $response = [
                            "response" => "Successful",
                            "data" => $row
                        ];
                    }       
                }else{
                    $response = [
                        "response" => "Error",
                        "message" => "Account does not exist"
                    ];
                }
            }            
        }

        header('Content-Type: application/json');
        echo json_encode($response); 
            
    }else{
        header("Location: ../Login.php");
    }