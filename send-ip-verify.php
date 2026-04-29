<?php
header('Content-Type: application/json');

$to    = filter_var($_GET['email'] ?? '', FILTER_VALIDATE_EMAIL);
$name  = htmlspecialchars($_GET['name']  ?? 'Student');
$link  = htmlspecialchars($_GET['link']  ?? '');
$ip    = htmlspecialchars($_GET['ip']    ?? 'Unknown');

if (!$to || !$link) {
    echo json_encode(['ok' => false, 'error' => 'Missing params']);
    exit;
}

$from_name  = "NEJ Masterclass";
$from_email = "noreply@" . ($_SERVER['HTTP_HOST'] ?? 'jaymasterclass.com');

$subject = "Action Required: Verify New Login Location";

$body = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
</head>
<body style='margin:0;padding:0;background:#0a0a0a;font-family:DM Sans,Arial,sans-serif;'>
  <table width='100%' cellpadding='0' cellspacing='0' style='background:#0a0a0a;padding:40px 20px;'>
    <tr><td align='center'>
      <table width='100%' cellpadding='0' cellspacing='0' style='max-width:520px;background:#111;border:1px solid #1e1e1e;border-radius:16px;overflow:hidden;'>

        <!-- Header -->
        <tr><td style='background:#0d0d0d;padding:28px 36px;border-bottom:1px solid #1a1a1a;'>
          <p style='margin:0;font-family:Georgia,serif;font-size:20px;color:#c8a24e;font-weight:700;letter-spacing:0.5px;'>NEJ Masterclass</p>
          <p style='margin:4px 0 0;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#444;'>Security Alert</p>
        </td></tr>

        <!-- Body -->
        <tr><td style='padding:36px;'>
          <p style='margin:0 0 6px;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#e55;font-weight:600;'>New Location Detected</p>
          <h2 style='margin:0 0 16px;font-family:Georgia,serif;font-size:22px;color:#f5f0eb;font-weight:700;'>Verify Your Login</h2>
          <p style='margin:0 0 20px;font-size:14px;color:#888;line-height:1.7;'>
            Hi <strong style='color:#f5f0eb;'>{$name}</strong>,<br><br>
            Someone tried to sign in to your account from a <strong style='color:#f5f0eb;'>new IP address</strong>. If this was you, click the button below to approve access from this location.
          </p>

          <!-- IP info box -->
          <table width='100%' cellpadding='0' cellspacing='0' style='background:#0d0d0d;border:1px solid #1e1e1e;border-radius:10px;margin-bottom:24px;'>
            <tr><td style='padding:16px 18px;'>
              <p style='margin:0 0 6px;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#555;font-weight:600;'>New IP Address</p>
              <p style='margin:0;font-size:15px;color:#c8a24e;font-weight:700;font-family:monospace;'>{$ip}</p>
            </td></tr>
          </table>

          <!-- CTA Button -->
          <table cellpadding='0' cellspacing='0' style='margin-bottom:24px;'>
            <tr><td style='background:#c8a24e;border-radius:10px;'>
              <a href='{$link}' style='display:inline-block;padding:14px 32px;font-size:14px;font-weight:700;color:#0a0a0a;text-decoration:none;font-family:Arial,sans-serif;'>
                ✓ Approve This Location
              </a>
            </td></tr>
          </table>

          <p style='margin:0 0 8px;font-size:13px;color:#666;line-height:1.6;'>
            This link expires in <strong style='color:#f5f0eb;'>24 hours</strong>. If you did not attempt to log in, you can safely ignore this email — your account remains protected.
          </p>
          <p style='margin:0;font-size:12px;color:#444;'>
            If the button doesn't work, copy this link:<br>
            <span style='color:#555;word-break:break-all;font-size:11px;'>{$link}</span>
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style='padding:20px 36px;border-top:1px solid #1a1a1a;background:#0d0d0d;'>
          <p style='margin:0;font-size:12px;color:#333;text-align:center;'>NEJ Masterclass · The Complete Photography Course</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>";

$headers  = "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$from_email}\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

$sent = mail($to, $subject, $body, $headers);
echo json_encode(['ok' => $sent]);
?>
