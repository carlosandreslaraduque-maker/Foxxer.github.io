<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// Permitir también envío por $_POST tradicional si se prueba desde formulario
if (!$data && !empty($_POST)) {
    $data = $_POST;
}

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'No se recibieron datos JSON válidos.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$nombre = trim($data['nombre'] ?? '');
$correo = trim($data['correo'] ?? '');
// Aceptar tanto 'password' (sin ñ) como 'contraseña' (con ñ) para evitar fallos de codificación UTF-8
$pass_raw = $data['password'] ?? ($data['contraseña'] ?? ($data['contrasena'] ?? ''));
$grado = intval($data['grado'] ?? 11);
$institucion = trim($data['institucion'] ?? 'I.E.D. Simón Bolívar');

if (empty($nombre) || empty($correo) || empty($pass_raw)) {
    echo json_encode(['success' => false, 'message' => 'Nombre, correo y contraseña son obligatorios.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Detectar automáticamente cómo se llama la columna de contraseña en la tabla `usuarios` de MySQL Workbench
$col_pass = 'contraseña';
$cols_res = $conn->query("SHOW COLUMNS FROM usuarios");
$existing_cols = [];
if ($cols_res) {
    while ($row = $cols_res->fetch_assoc()) {
        $existing_cols[] = $row['Field'];
        if (in_array($row['Field'], ['contraseña', 'contrasena', 'password', 'clave', 'password_hash'])) {
            $col_pass = $row['Field'];
        }
    }
}

// 1. Verificar si el correo ya existe en MySQL
$check = $conn->prepare("SELECT id FROM usuarios WHERE correo = ?");
if (!$check) {
    echo json_encode(['success' => false, 'message' => 'Error SQL al verificar usuario: ' . $conn->error], JSON_UNESCAPED_UNICODE);
    exit;
}
$check->bind_param("s", $correo);
$check->execute();
$res_check = $check->get_result();

if ($res_check && $res_check->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Este usuario o correo ya está registrado en la base de datos.'], JSON_UNESCAPED_UNICODE);
    exit;
}
$check->close();

// 2. Encriptar contraseña e insertar en MySQL
$hashed_password = password_hash($pass_raw, PASSWORD_DEFAULT);

// Construir INSERT seguro con backticks en la columna de contraseña
$sql = "INSERT INTO usuarios (`nombre`, `correo`, `$col_pass`, `grado`, `institucion`) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(['success' => false, 'message' => 'Error al preparar INSERT en MySQL: ' . $conn->error], JSON_UNESCAPED_UNICODE);
    exit;
}

$stmt->bind_param("sssis", $nombre, $correo, $hashed_password, $grado, $institucion);

if ($stmt->execute()) {
    $nuevo_id = $stmt->insert_id;
    $conn->commit();
    echo json_encode([
        'success' => true,
        'message' => 'Usuario guardado exitosamente en MySQL (ID #' . $nuevo_id . ')',
        'usuario' => [
            'id' => $nuevo_id,
            'nombre' => $nombre,
            'correo' => $correo,
            'grado' => $grado,
            'institucion' => $institucion,
            'puntos' => 50,
            'nivel' => 1
        ]
    ], JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(['success' => false, 'message' => 'Error MySQL al guardar: ' . $stmt->error], JSON_UNESCAPED_UNICODE);
}

$stmt->close();
$conn->close();
?>