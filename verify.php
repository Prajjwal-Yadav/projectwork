<?php

$con=mysqli_connect("localhost","root","","projectwork");

$name=$_POST['name'];
$email=$_POST['email'];
$pass=$_POST['pass'];

$sql="SELECT * FROM user WHERE email='$email' and password='$pass'";

$query=mysqli_query($con,$sql);

if($query){
    if($row= mysqli_fetch_array($query)){
        //echo $row['email'] .$row['password']
        session_start();
        $_SESSION['id']=$row['id'];
        $_SESSION['name']=$row['name'];

        header("location:index.php");

    }
    else{
        echo "user not found"; 
    }
}


?>