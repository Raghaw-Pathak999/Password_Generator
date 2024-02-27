// Function to generate a password based on user preferences
function generatePassword() {
    // Retrieve the specified password length from the input field
    var length = document.getElementById("passwordLength").value;

    // Define a character set based on user-selected options
    var charset = "";
    if (document.getElementById("uppercaseCheckbox").checked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (document.getElementById("lowercaseCheckbox").checked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("numberCheckbox").checked) charset += "0123456789";
    if (document.getElementById("symbolCheckbox").checked) charset += "!@#$%^&*()_-+=<>?/";

    // Generate the password using the defined character set
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    // Display the generated password in the output field
    document.getElementById("outputPassword").value = password;
}

// Function to copy the generated password to the clipboard
function copyToClipboard() {
    // Select the output password field
    var output = document.getElementById("outputPassword");

    // Execute the copy command
    document.execCommand("copy");

    // Show an alert indicating that the password has been copied to the clipboard
    alert("Password copied to clipboard!");
}
