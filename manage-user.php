<?php
// Include database configuration file
require_once 'dbconfig.php';



// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Add User
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_user'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $photoURL = $_POST['photoURL'];

    $stmt = $conn->prepare("INSERT INTO users (name, email, photoURL, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->bind_param("sss", $name, $email, $photoURL);

    if ($stmt->execute()) {
        echo "<script>alert('User added successfully!');</script>";
    } else {
        echo "<script>alert('Error adding user: {$stmt->error}');</script>";
    }

    $stmt->close();
}

// Handle Remove User
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['remove_user'])) {
    $id = $_POST['user_id'];

    $stmt = $conn->prepare("DELETE FROM users WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "<script>alert('User removed successfully!');</script>";
    } else {
        echo "<script>alert('Error removing user: {$stmt->error}');</script>";
    }

    $stmt->close();
}

$sql = "SELECT id, name, email, photoURL, created_at FROM users";
$result = $conn->query($sql);

echo '<!DOCTYPE html>';
echo '<html lang="en">';
echo '<head>';
echo '<meta charset="UTF-8">';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo ' <link rel="shortcut icon" href="img/new.ico" type="image/x-icon">';
echo '<title>User Control</title>';
echo '<style>';
echo '
    body {
        font-family: Arial, sans-serif;
        background-color: #121212;
        color: #ffffff;
        margin: 0;
        padding: 20px;
    }
    h1, h2 {
        text-align: center;
        color: #ff1e2d;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
        background-color: #1e1e1e;
    }
    th, td {
        padding: 12px 15px;
        border: 1px solid #333;
        text-align: left;
    }
    th {
        background-color: #ff1e2d;
        color: #fff;
    }
    tr:nth-child(even) {
        background-color: #242424;
    }
    img {
        max-width: 50px;
        border-radius: 50%;
    }
    form {
        margin: 20px 0;
        padding: 15px;
        background-color: #1e1e1e;
        border: 1px solid #333;
        border-radius: 8px;
        display: none;
    }
    .add-user-form.open {
        display: block;
    }
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    input[type="text"], input[type="email"], input[type="url"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #444;
        border-radius: 4px;
        background-color: #1e1e1e;
        color: #fff;
    }
    button {
        padding: 10px 15px;
        border: none;
        background-color: #ff1e2d;
        color: #fff;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #ff1e2d;
    }


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
            color: red;
            background: rgba(0, 0, 0, 0.7);
        }

    .toggle-button {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        background-color: #ff1e2d;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    }
    .toggle-button:hover {
        background-color: #ff1e2d;
    }
    @media screen and (max-width: 768px) {
        table, th, td {
            font-size: 14px;
        }
        .toggle-button {
            padding: 8px 16px;
            font-size: 14px;
        }
    }
';
echo '</style>';
echo '</head>';
echo '<body>';
echo '<h1>User Management</h1>';
echo ' <a href="javascript:history.back()" class="go-back">←</a>';

// Toggle Button
echo '<button class="toggle-button" onclick="toggleForm()">Add User</button>';

// Add User Form
echo '<form method="POST" class="add-user-form" id="addUserForm">';
echo '<label for="name">Name</label>';
echo '<input type="text" name="name" id="name" required>';
echo '<label for="email">Email</label>';
echo '<input type="email" name="email" id="email" required>';
echo '<label for="photoURL">Photo URL</label>';
echo '<input type="url" name="photoURL" id="photoURL" required>';
echo '<button type="submit" name="add_user">Add User</button>';
echo '</form>';

if ($result->num_rows > 0) {
    echo '<table>';
    echo '<thead>';
    echo '<tr>';
    echo '<th>ID</th>';
    echo '<th>Name</th>';
    echo '<th>Email</th>';
    echo '<th>Photo</th>';
    echo '<th>Created At</th>';
    echo '<th>Actions</th>';
    echo '</tr>';
    echo '</thead>';
    echo '<tbody>';

    while ($row = $result->fetch_assoc()) {
        echo '<tr>';
        echo '<td>' . htmlspecialchars($row['id']) . '</td>';
        echo '<td>' . htmlspecialchars($row['name']) . '</td>';
        echo '<td>' . htmlspecialchars($row['email']) . '</td>';
        echo '<td><img src="' . htmlspecialchars($row['photoURL']) . '" alt="Photo"></td>';
        echo '<td>' . htmlspecialchars($row['created_at']) . '</td>';
        echo '<td>';
        echo '<form method="POST" style="display:inline;">';
        echo '<input type="hidden" name="user_id" value="' . htmlspecialchars($row['id']) . '">';
        echo '<button type="submit" name="remove_user">Remove</button>';
        echo '</form>';
        echo '</td>';
        echo '</tr>';
    }

    echo '</tbody>';
    echo '</table>';
} else {
    echo '<p>No users found.</p>';
}

echo '
<script>
    function toggleForm() {
        const form = document.getElementById("addUserForm");
        form.classList.toggle("open");
    }
</script>
';

echo '</body>';
echo '</html>';

$conn->close();
?>
