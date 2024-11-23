<?php 

include('dbconfig.php');

session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);

    
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
      
        header("Location: ./extra/admin.html");
        exit;
    } else {
        $error = "Invalid email or password.";
    }

    $stmt->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/new.ico" type="image/x-icon">
    <title>Admin Login</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #141E30, #243B55);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .login-container {
            width: 90%;
            max-width: 400px;
            padding: 20px;
            box-sizing: border-box;
        }

        .login-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        h2 {
            margin: 10px 0 20px;
            font-size: 24px;
        }

        .input-group {
            margin-bottom: 20px;
            text-align: left;
        }

        .input-group label {
            display: block;
            font-size: 14px;
            margin-bottom: 5px;
        }

        .input-group input {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            outline: none;
            font-size: 16px;
            color: #000;
        }

        .input-group input:focus {
            box-shadow: 0 0 5px #007bff;
        }

        .login-button {
            width: 100%;
            padding: 10px;
            background: #007bff;
            color: #fff;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .login-button:hover {
            background: #0056b3;
        }

        .error {
            color: #ff4d4d;
            margin-top: 10px;
        }

        /* Go Back Arrow */
        .go-back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 24px;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
            background: transparent;
            padding: 10px;
            border-radius: 5px;
            transition: background 0.3s ease;
        }

        .go-back:hover {
            background: rgba(0, 0, 0, 0.7);
        }

        @media (max-width: 600px) {
            body {
                padding: 10px;
            }

            h2 {
                font-size: 20px;
            }

            .login-card {
                padding: 20px;
            }

            .login-button {
                font-size: 14px;
            }

            .input-group input {
                font-size: 14px;
                padding: 8px;
            }
        }
    </style>
</head>
<body>
    
    <a href="javascript:history.back()" class="go-back">←</a>

    <div class="login-container">
        <div class="login-card">
            <h2>Admin Login</h2>
            <?php if (isset($error)): ?>
                <p class="error"><?= htmlspecialchars($error) ?></p>
            <?php endif; ?>
            <form action="admin.php" method="POST">
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="login-button">Login</button>
            </form>
        </div>
    </div>
</body>
</html>
