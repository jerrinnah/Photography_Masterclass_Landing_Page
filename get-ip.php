<?php
// Returns the client's real IP address as JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$ip = $_SERVER['HTTP_CF_CONNECTING_IP']   // Cloudflare
    ?? $_SERVER['HTTP_X_FORWARDED_FOR']    // Load balancer / proxy
    ?? $_SERVER['HTTP_X_REAL_IP']          // Nginx proxy
    ?? $_SERVER['REMOTE_ADDR']             // Direct connection
    ?? 'unknown';

// If multiple IPs in X-Forwarded-For, take the first (client)
if (strpos($ip, ',') !== false) {
    $ip = trim(explode(',', $ip)[0]);
}

echo json_encode(['ip' => $ip]);
?>
