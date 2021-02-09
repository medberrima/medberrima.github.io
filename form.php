<?php
  $name= $_POST['Name'] ;
  $mail= $_POST['Mail'] ;
  $subject= $_POST['Subject'] ;
  $message= $_POST['Message'] ;
  
  $to ="medberrima0@gmail.com";
  $body ="";
  
  $body .="form  : ".$name ."\r\n";
  $body .="Email :  ".$mail ."\r\n";
  $body .="Message :  ".$message ."\r\n";
  
  mail($to,$subject,$body);

?>