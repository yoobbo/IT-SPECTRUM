<?php
// Start the session
session_start();

// Set default language to Myanmar
if (!isset($_SESSION['language'])) {
    $_SESSION['language'] = 'မြန်မာ';
}

// Update language based on user selection
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['language'])) {
    $_SESSION['language'] = $_POST['language'];
}

$language = $_SESSION['language'];

// Define content for each language
$content = [
    'မြန်မာ' => 'မင်္ဂလာပါ (Hello in Myanmar Language)',
    'English' => 'Hello, Welcome to our Website!'
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Language Switcher</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container py-5">
        <div id="language-switcher" class="text-center">
            <form method="POST" action="">
                <label for="language-select" class="form-label fs-4">Choose Language:</label>
                <select name="language" id="language-select" class="form-select w-auto mx-auto" onchange="this.form.submit()">
                    <option value="မြန်မာ" <?php if ($language === 'မြန်မာ') echo 'selected'; ?>>မြန်မာ</option>
                    <option value="English" <?php if ($language === 'English') echo 'selected'; ?>>English</option>
                </select>
            </form>
        </div>
        <div id="content" class="text-center mt-4 fs-5">
            <p><?php echo $content[$language]; ?></p>
        </div>
    </div>

    <!-- Bootstrap JS Bundle -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
