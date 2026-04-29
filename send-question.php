<?php
// ── Send student question notification to admin email ──
// Upload to cPanel alongside your HTML files

$admin_email = "devjerrynnah@gmail.com";

$student_email = strip_tags($_GET['email']    ?? '');
$chapter       = strip_tags($_GET['chapter']  ?? '');
$question      = strip_tags($_GET['question'] ?? '');

if (!$student_email || !$question) {
    http_response_code(400);
    exit;
}

$subject = "New Question — " . $chapter;
$message = "
New question from a student on your masterclass.

Student:  $student_email
Chapter:  $chapter

Question:
$question

---
Reply from your admin dashboard: https://yoursite.com/admin.html
";

$headers = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n" .
           "Reply-To: " . $student_email . "\r\n" .
           "X-Mailer: PHP/" . phpversion();

mail($admin_email, $subject, $message, $headers);
http_response_code(200);
?>
