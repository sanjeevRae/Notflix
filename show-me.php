<?php
include('dbconfig.php');

$sql = "SELECT id, name, email, photoURL, created_at FROM users";
$result = $conn->query($sql);

if (!$result) {
    die("Query failed: " . $conn->error);
}

$joinData = [];
$totalUsers = 0;
$todayUsers = 0;
$newUser = null;

$today = date('Y-m-d');

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $totalUsers++;

        if (date('Y-m-d', strtotime($row['created_at'])) === $today) {
            $todayUsers++;
        }

        $monthYear = date('Y-m', strtotime($row['created_at']));
        if (array_key_exists($monthYear, $joinData)) {
            $joinData[$monthYear]++;
        } else {
            $joinData[$monthYear] = 1;
        }

        // Find the most recently joined user
        if (is_null($newUser) || strtotime($row['created_at']) > strtotime($newUser['created_at'])) {
            $newUser = $row;
        }
    }
} else {
    echo "No users found.";
}

$conn->close();

$labels = json_encode(array_keys($joinData)); 
$data = json_encode(array_values($joinData)); 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="jKhNHb8nGwe6uq8XrtcOk01k-SKFuEyvhjCRI40TXpQ" />
    <link rel="shortcut icon" href="img/new.ico" type="image/x-icon">
    <title>Data</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #121212;
            color: #f1f1f1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            display: flex;
            gap: 20px;
            width: 90%;
            max-width: 1200px;
        }
        .box {
            flex: 1;
            padding: 20px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            background-color: #1f1f1f;
            transition: all 0.3s ease;
            overflow: hidden;
        }
        .box:hover {
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }
        .chart-container {
            flex: 3;
        }
        .info-container {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .info-box {
            padding: 15px;
            background-color: #252525;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
            text-align: center;
        }
        .info-box h3 {
            margin: 0;
            font-size: 1.2em;
            color: #e50914;
        }
        .info-box p {
            margin: 5px 0 0;
            font-size: 1em;
        }
        .info-box img {
            display: block;
            margin: 0 auto 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }
        canvas {
            width: 100% !important;
            height: 300px;
            border-radius: 10px;
        }
        .btn {
            padding: 10px 20px;
            background-color: #e50914;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 10px 0;
            transition: background-color 0.3s ease;
        }
        .btn:hover {
            background-color: #b20710;
        }
        @media (max-width: 768px) {
            .container {
                flex-direction: column;
            }
            .info-container {
                flex-direction: row;
                justify-content: space-between;
            }
            .info-box {
                flex: 1;
                margin: 0 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">
            <button class="btn" onclick="goBack()">Go Back</button>
            <button class="btn" id="toggleChartType">Switch to Line Chart</button>
        </div>

        <div class="box chart-container">
            <h2>User Join Chart</h2>
            <canvas id="userChart"></canvas>
        </div>

        <div class="info-container">
            <div class="info-box">
                <h3>Total Users</h3>
                <p><?php echo $totalUsers; ?></p>
            </div>
            <div class="info-box">
                <h3>Users Joined Today</h3>
                <p><?php echo $todayUsers; ?></p>
            </div>
            <div class="info-box">
                <h3>New User Joined</h3>
                <?php if ($newUser): ?>
                    <img src="<?php echo $newUser['photoURL']; ?>" alt="Profile Picture">
                    <p>Name: <?php echo htmlspecialchars($newUser['name']); ?></p>
                    <p>Joined On: <?php echo date('F j, Y', strtotime($newUser['created_at'])); ?></p>
                <?php else: ?>
                    <p>No new users yet.</p>
                <?php endif; ?>
            </div>
        </div>
    </div>

    <script>
        const ctx = document.getElementById('userChart').getContext('2d');
        let chartType = 'bar';

        let userChart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: <?php echo $labels; ?>, 
                datasets: [{
                    label: 'Users Joined',
                    data: <?php echo $data; ?>,  
                    backgroundColor: '#e50914', 
                    borderColor: '#b20710',  
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1 
                        }
                    }
                }
            }
        });

        document.getElementById('toggleChartType').addEventListener('click', function() {
            chartType = (chartType === 'bar') ? 'line' : 'bar';
            userChart.destroy();
            userChart = new Chart(ctx, {
                type: chartType,
                data: {
                    labels: <?php echo $labels; ?>,
                    datasets: [{
                        label: 'Users Joined',
                        data: <?php echo $data; ?>,
                        backgroundColor: '#e50914',
                        borderColor: '#b20710',
                        borderWidth: 1,
                        fill: (chartType === 'line') ? true : false
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1
                            }
                        }
                    }
                }
            });
            this.textContent = (chartType === 'bar') ? 'Switch to Line Chart' : 'Switch to Bar Chart';
        });

        function goBack() {
            window.history.back(); 
        }
    </script>
</body>
</html>
