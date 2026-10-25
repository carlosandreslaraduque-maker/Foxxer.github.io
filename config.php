<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$host = 'localhost';
$user = 'root';
$password = '123456'; 
$database = 'foxer_db';

mysqli_report(MYSQLI_REPORT_OFF);
$conn = @new mysqli($host, $user, $password, $database);

// Si falla con '123456', intentar con contraseña vacía '' (típico en XAMPP por defecto)
if ($conn->connect_error) {
    $conn_fallback = @new mysqli($host, $user, '', $database);
    if (!$conn_fallback->connect_error) {
        $conn = $conn_fallback;
    } else {
        header('Content-Type: application/json; charset=utf-8');
        die(json_encode([
            'success' => false,
            'message' => 'Error de conexión a MySQL (' . $database . '): ' . $conn->connect_error
        ], JSON_UNESCAPED_UNICODE));
    }
}

$conn->set_charset("utf8mb4");
$conn->autocommit(true);
?>