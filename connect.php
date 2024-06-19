<?php
    $name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	

	// Database connection
	$conn = new mysqli('localhost','root','','collect');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, email, message) values(?, ?, ?)");
		$stmt->bind_param("sss", $name, $email, $message);
		$execval = $stmt->execute();
		echo $execval;
		
		echo "Will get right back to you!                            ";
		
		echo '<a href="index.html">Go back</a>';
		$stmt->close();
		$conn->close();
	}
?>