<?php
if(isset($_POST["submit"])){
if($_POST["name"]==""||$_POST["email"]==""||$_POST["subject"]==""||$_POST["message"]==""){
echo "Fill All Fields..";
}

else{
$email=$_POST['email'];

$email =filter_var($email, FILTER_SANITIZE_EMAIL);

$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (!$email){
echo "Invalid Sender's Email";
}

else{
$subject = $_POST['subject'];
$message = $_POST['message'];
$headers .= 'Cc:'. $email2 . "\r\n"; 

$message = wordwrap($message, 70);

mail("raoneeta08@gmail.com", $subject, $message, $headers);
echo "Your mail has been sent successfuly ! Thank you for your feedback";
}
}
}
?>