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
        /* General Styling */
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1e1e1e;
            color: #fff;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            justify-content: space-between;
        }

        .box {
            flex: 1 1 45%;
            padding: 20px;
            background-color: #2c2c2c;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        h2 {
            font-size: 1.5rem;
            color: #ff3b3b;
            margin-bottom: 20px;
        }

        /* Chart Styling */
        .chart-box {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        canvas {
            width: 100% !important;
            height: 300px;
            border-radius: 10px;
        }

        /* Table Styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        table, th, td {
            border: 1px solid #444;
        }

        th, td {
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #ff3b3b;
            color: white;
        }

        td {
            background-color: #333;
        }

        td img {
            border-radius: 50%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .box {
                flex: 1 1 100%;
            }

            .chart-box {
                flex-direction: column;
                align-items: flex-start;
            }

            canvas {
                height: 250px;
            }

            table {
                font-size: 0.9rem;
            }
        }

        @media (max-width: 480px) {
            h2 {
                font-size: 1.2rem;
            }

            table, th, td {
                padding: 8px;
            }

            canvas {
                height: 200px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- User Join Bar Chart -->
        <div class="box chart-box">
            <h2>User Join Bar Chart</h2>
            <canvas id="userChart"></canvas>
        </div>

        <!-- User Details Table -->
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
