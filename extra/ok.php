<?php
// Include database configuration
include('dbconfig.php');

// SQL query to get join dates
$sql = "SELECT id, name, email, photoURL, created_at FROM users";
$result = $conn->query($sql);

// Debugging: Check if query is successful
if (!$result) {
    die("Query failed: " . $conn->error);
}

// Prepare an array to store the months and their counts
$joinData = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        // Get the month and year from created_at
        $monthYear = date('Y-m', strtotime($row['created_at']));
        if (array_key_exists($monthYear, $joinData)) {
            $joinData[$monthYear]++;
        } else {
            $joinData[$monthYear] = 1;
        }
    }
} else {
    echo "No users found.";
}

// Close the database connection
$conn->close();

// Prepare data for the chart
$labels = json_encode(array_keys($joinData)); // X-axis labels (months)
$data = json_encode(array_values($joinData)); // Y-axis data (user join counts)
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Join Bar Chart and User Details</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: space-between;
            margin: 20px;
        }
        .box {
            width: 45%;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        .chart-box {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        canvas {
            width: 100% !important;
            height: 300px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid #ddd;
            text-align: left;
        }
        th, td {
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="box chart-box">
        <h2>User Join Bar Chart</h2>
        <canvas id="userChart"></canvas>
    </div>

    <div class="box">
        <h2>User Details</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Photo</th>
                    <th>Joined At</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Fetch user details again for the table
                include('dbconfig.php');
                $sql = "SELECT id, name, email, photoURL, created_at FROM users";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                                <td>" . $row['id'] . "</td>
                                <td>" . $row['name'] . "</td>
                                <td>" . $row['email'] . "</td>
                                <td><img src='" . $row['photoURL'] . "' alt='User Photo' width='50' height='50'></td>
                                <td>" . $row['created_at'] . "</td>
                              </tr>";
                    }
                } else {
                    echo "<tr><td colspan='5'>No users found.</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <script>
        // JavaScript to render the chart
        const ctx = document.getElementById('userChart').getContext('2d');
        const userChart = new Chart(ctx, {
            type: 'bar',  // Bar chart type
            data: {
                labels: <?php echo $labels; ?>,  // X-axis labels (months)
                datasets: [{
                    label: 'Users Joined',
                    data: <?php echo $data; ?>,  // Y-axis data (join counts)
                    backgroundColor: 'skyblue',  // Bar color
                    borderColor: 'blue',  // Border color
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1  // Set the step size for y-axis ticks
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>
