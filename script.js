function generateOTP() {
    var digits = '0123456789';
    var otpLength = 6;
    var otp = '';

    for (var i = 0; i < otpLength; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    document.getElementById('otp').value = otp;
}
