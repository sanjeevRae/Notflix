<link rel="shortcut icon" href="img/new.ico" type="image/x-icon">
<a href="javascript:history.back()" class="go-back">←</a>
<title>Movie- Manage</title>
<div class="add-movie-btn-container">
    <button class="btn add-btn" id="addMovieBtn">Add Movie </button>
</div>


<div id="addMovieForm" class="movie-form-container" style="display: none;">
    <form method="POST" action="" class="movie-form">
        <label for="movie_name">Movie Name:</label>
        <input type="text" name="movie_name" id="movie_name" required><br><br>
        
        <label for="movie_link">Movie Link:</label>
        <input type="text" name="movie_link" id="movie_link" required><br><br>
        
        <label for="movie_pic">Movie Picture URL:</label>
        <input type="text" name="movie_pic" id="movie_pic" required><br><br>

        <input type="submit" name="add_movie" value="Add Movie" class="btn add-btn">
        <button type="button" class="btn cancel-btn" id="cancelAddMovieBtn">Cancel</button>
    </form>
</div>

<?php

include('dbconfig.php');


if (isset($_POST['add_movie'])) {
    
    $movie_name = $_POST['movie_name'];
    $movie_link = $_POST['movie_link'];
    $movie_pic = $_POST['movie_pic'];


    $sql = "INSERT INTO movies (movie_name, movie_link, movie_pic) 
            VALUES ('$movie_name', '$movie_link', '$movie_pic')";
    
    if ($conn->query($sql) === TRUE) {
        echo "<div class='alert success'>New movie added successfully.</div>";
    } else {
        echo "<div class='alert error'>Error: " . $conn->error . "</div>";
    }
}


if (isset($_POST['remove_movie'])) {
    $movie_id = $_POST['movie_id'];

    
    $sql = "DELETE FROM movies WHERE movie_id = '$movie_id'";

    if ($conn->query($sql) === TRUE) {
        echo "<div class='alert success'>Movie removed successfully.</div>";
    } else {
        echo "<div class='alert error'>Error: " . $conn->error . "</div>";
    }
}


$sql = "SELECT * FROM movies";
$result = $conn->query($sql);

echo "<h2>Movies List</h2>";

if ($result->num_rows > 0) {

    while($row = $result->fetch_assoc()) {
        echo "<div class='movie'>";
        echo "<h3>" . $row['movie_name'] . "</h3>";
        echo "<p><strong>Movie ID:</strong> " . $row['movie_id'] . "</p>";
        echo "<p><img src='" . $row['movie_pic'] . "' alt='" . $row['movie_name'] . "' class='movie-img'></p>";
        echo "<p><a href='" . $row['movie_link'] . "' target='_blank' class='movie-link'>Watch Movie</a></p>";

       
        echo "<form method='POST' action='' class='remove-form'>
                <input type='hidden' name='movie_id' value='" . $row['movie_id'] . "'>
                <input type='submit' name='remove_movie' value='Remove Movie' class='btn remove-btn'>
              </form>";
        echo "</div>";
    }
} else {
    echo "<div class='alert info'>No movies found.</div>";
}

$conn->close();
?>

<style>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    padding: 20px;
}


h2 {
    color: #f44336;
    text-align: center;
    margin-bottom: 30px;
}


.movie {
    background-color: #1f1f1f;
    margin-bottom: 25px;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
}

.movie:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.movie h3 {
    color: #fff;
    margin-bottom: 12px;
    font-size: 24px;
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
            background: rgba(0, 0, 0, 0.7);
            color: red;
        }

.movie p {
    margin: 8px 0;
}

.movie .movie-img {
    width: 120px;
    height: 180px;
    border-radius: 5px;
    object-fit: cover;
}

.movie .movie-link {
    color: #ff5722;
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    display: inline-block;
}

.movie .btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 12px 25px;
    margin: 8px 0;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
}

.movie .remove-btn {
    background-color: #d32f2f;
    position: absolute;
    right: 20px;
    top: 20px;
}

.movie .btn:hover {
    background-color: #d10000;
}


.movie-form-container {
    background-color: #1f1f1f;
    padding: 25px;
    border-radius: 8px;
    margin: 30px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.movie-form label {
    color: #fff;
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
}

.movie-form input[type="text"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #f44336;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 16px;
    transition: border-color 0.3s ease;
}

.movie-form input[type="text"]:focus {
    border-color: #ff5722;
}

.movie-form input[type="submit"] {
    background-color: #f44336;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.movie-form input[type="submit"]:hover {
    background-color: #d10000;
}

.movie-form .cancel-btn {
    background-color: #555;
    width: 100%;
    margin-top: 15px;
    font-size: 16px;
    padding: 12px 25px;
}

.movie-form .cancel-btn:hover {
    background-color: #444;
}


.add-movie-btn-container {
    margin-bottom: 25px;
    display: flex;
    justify-content: right;
}

.add-btn {
    background-color: #f44336;
    color: white;
    padding: 12px 25px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.add-btn:hover {
    background-color: #d10000;

}


.alert {
    padding: 12px;
    margin: 25px 0;
    border-radius: 8px;
    text-align: center;
}

.alert.success {
    background-color: #4CAF50;
    color: white;
}

.alert.error {
    background-color: #f44336;
    color: white;
}

.alert.info {
    background-color: #2196F3;
    color: white;
}
</style>

<script>
document.getElementById('addMovieBtn').addEventListener('click', function() {
    document.getElementById('addMovieForm').style.display = 'block';
    document.getElementById('addMovieBtn').style.display = 'none';
});

document.getElementById('cancelAddMovieBtn').addEventListener('click', function() {
    document.getElementById('addMovieForm').style.display = 'none';
    document.getElementById('addMovieBtn').style.display = 'block';
});
</script>
