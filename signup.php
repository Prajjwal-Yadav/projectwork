<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
    <link rel="stylesheet" href="signup.css">
    <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
</head>
<body>
  <center>
    <div class="nav">
        
    </div>
    <div class="container">
    <div class="wrapper">
        <div class="title"><span>SIGNUP HERE</span></div>
        <form action="submit.php" method="post">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Name" name="name"required>
          </div>
            <div class="row">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Email" name="email"required>
              </div>
              
              <!-- <div class="row">
                <i class="fas fa-user"></i>
                <input type="tel" placeholder="Phone Number" required>
              </div> -->
              <div class="row">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter password"name="pass" required>
              </div>
              <div class="row">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Re enter password" required>
              </div>
              <div class="row button">
                <input type="submit" value="signup" >
              </div>
        </form>

        Alredy registered? then <a href="login.php">click here</a>

    </div>
</div>
</center>
</body>
</html>