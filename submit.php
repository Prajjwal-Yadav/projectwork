<?php
echo "in submit.php" ;
$con=mysqli_connect("localhost","root","","projectwork");
if($con){
    die('Connection failed');
}else{
    echo 'Something went wrong';
}
$name=$_POST['name'];
$email=$_POST['email'];
$pass=$_POST['pass'];

//echo $name. $email .$pass;

$sql="INSERT INTO user(id,name,email,password) VALUES (NULL,'$name','$email','$pass')";

$query=mysqli_query($con,$sql);

if($query){
    header('location:login.php');
}
else{
    echo "something went wrong";
}

?>