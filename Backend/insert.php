<?php
include './DB/db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); 
    $mno = $_POST["mno"];
    $age = $_POST["age"];

    $sql = "INSERT INTO User (name, email, passwo-rd, mno, age) VALUES ('$name', '$email', '$password', '$mno', '$age')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully!";
    } else {
        echo "Error: " . $conn->error;
    }
    
    $conn->close();
}
?>
