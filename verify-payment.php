<?php
// ═══════════════════════════════════════════════════════
// PAYSTACK PAYMENT VERIFICATION
// Upload this file to your cPanel alongside your HTML files
// Replace YOUR_PAYSTACK_SECRET_KEY with your actual secret key
// Get it from: dashboard.paystack.com → Settings → API Keys
// ═══════════════════════════════════════════════════════

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

$reference = $_GET['reference'] ?? '';

if (!$reference) {
    echo json_encode(['status' => false, 'message' => 'No payment reference provided']);
    exit;
}

require_once __DIR__ . '/config.php';
$secret_key = PAYSTACK_SECRET_KEY;

$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL            => "https://api.paystack.co/transaction/verify/" . rawurlencode($reference),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER     => [
        "Authorization: Bearer " . $secret_key,
        "Cache-Control: no-cache",
    ],
]);

$response = curl_exec($curl);
$err      = curl_error($curl);
curl_close($curl);

if ($err) {
    echo json_encode(['status' => false, 'message' => 'Could not reach Paystack']);
    exit;
}

$result = json_decode($response, true);

if (
    isset($result['status']) &&
    $result['status'] === true &&
    isset($result['data']['status']) &&
    $result['data']['status'] === 'success'
) {
    echo json_encode([
        'status' => true,
        'email'  => $result['data']['customer']['email'] ?? '',
        'name'   => ($result['data']['customer']['first_name'] ?? '') . ' ' . ($result['data']['customer']['last_name'] ?? ''),
        'amount' => ($result['data']['amount'] ?? 0) / 100,
    ]);
} else {
    echo json_encode([
        'status'  => false,
        'message' => 'Payment was not successful or already used',
    ]);
}
?>
