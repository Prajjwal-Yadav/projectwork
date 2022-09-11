<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Form validation in HTML & CSS | CodingNepal</title>
  <link rel="stylesheet" href="style1.css">
 
</head>
<body>
  <p> check </p>
  
  <div class="wrapper">
    <header>Login </header>
    <form action="verify.php">
      <div class="field email">
        <div class="input-area">
          <input type="text" placeholder="Email Address">
          <i class="icon fas fa-envelope"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Email Required</div>
      </div>
      <div class="field password">
        <div class="input-area">
          <input type="password" placeholder="Password">
          <i class="icon fas fa-lock"></i>
          <i class="error error-icon fas fa-exclamation-circle"></i>
        </div>
        <div class="error error-txt">Password Required</div>
      </div>
      <div class="pass-txt"><a href="#">Forgot password?</a></div>
      <input type="submit" value="Login">
    </form>
    <div class="sign-txt">New account? <a href="signup.php"> Signup now</a></div>
  </div>
  <?php
  include 'submit.php';
  echo 'Hey';
  if(=isset($_GET['reg'])){
    if(($_GET['reg']==1)){
      echo "<script>alert('Registration succesful please login')</script>";
    }
  }
  ?>
  

</body>
</html>