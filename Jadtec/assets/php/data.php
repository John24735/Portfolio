<?php
$servername = "localhost";
$username = "root";
$password = "";
$database_name = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $database_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
        
        $name = $_REQUEST["fullname"];
        $email = $_REQUEST['email'];
        $message=$_REQUEST['message'];

      

        $stmt = $conn->prepare("INSERT INTO inbox(name,email,message) VALUES(?,?,?)");
        $stmt->bind_param("sss",$name,$email,$message);


        $stmt->execute();
        echo "message sent";
        $stmt->close();
        $conn->close();
    }
?>