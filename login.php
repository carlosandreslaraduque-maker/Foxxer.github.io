<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data && !empty($_POST)) {
    $data = $_POST;
}

$correo = trim($data['correo'] ?? '');
$pass_raw = $data['password'] ?? ($data['contraseña'] ?? ($data['contrasena'] ?? ''));

if (empty($correo) || empty($pass_raw)) {
    echo json_encode(['success' => false, 'message' => 'Correo y contraseña obligatorios.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Seleccionar todas las columnas del usuario para evitar errores si alguna varía
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = ? OR nombre = ? LIMIT 1");
if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Error SQL en login: ' . $conn->error], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt->bind_param("ss", $correo, $correo);
$stmt->execute();
$result = $stmt->get_result();

if (!$result || $result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Usuario no encontrado en la base de datos MySQL.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$usuario = $result->fetch_assoc();

// Detectar columna de contraseña
$hash_guardado = $usuario['contraseña'] ?? ($usuario['contrasena'] ?? ($usuario['password'] ?? ''));

// Verificar tanto hash encriptado como texto plano (por si insertaron un usuario manualmente en MySQL Workbench)
$login_valido = password_verify($pass_raw, $hash_guardado) || ($pass_raw === $hash_guardado);

if ($login_valido) {
    unset($usuario['contraseña'], $usuario['contrasena'], $usuario['password']);
    $usuario['institucion'] = $usuario['institucion'] ?? 'I.E.D. Simón Bolívar';
    $usuario['grado'] = $usuario['grado'] ?? 11;
    $usuario['puntos'] = intval($usuario['puntos'] ?? 50);
    $usuario['nivel'] = intval($usuario['nivel'] ?? 1);

    echo json_encode(['success' => true, 'usuario' => $usuario], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta.'], JSON_UNESCAPED_UNICODE);
}

$stmt->close();
$conn->close();
?>