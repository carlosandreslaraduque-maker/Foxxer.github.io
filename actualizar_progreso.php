<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Sin datos']);
    exit;
}

$id = intval($data['id'] ?? 0);
$correo = trim($data['correo'] ?? '');
$puntos = intval($data['puntos'] ?? 50);
$nivel = intval($data['nivel'] ?? 1);

if ($id > 0) {
    $stmt = $conn->prepare("UPDATE usuarios SET puntos = ?, nivel = ? WHERE id = ?");
    if ($stmt) {
        $stmt->bind_param("iii", $puntos, $nivel, $id);
        $stmt->execute();
        $stmt->close();
    }
} elseif (!empty($correo)) {
    $stmt = $conn->prepare("UPDATE usuarios SET puntos = ?, nivel = ? WHERE correo = ?");
    if ($stmt) {
        $stmt->bind_param("iis", $puntos, $nivel, $correo);
        $stmt->execute();
        $stmt->close();
    }
}

echo json_encode(['success' => true]);
$conn->close();
?>