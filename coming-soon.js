// Matrix Rain Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Matrix characters (including Persian and English)
const matrixChars = 'アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルヲグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヺゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const chars = matrixChars.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;

// Create array of drops
const drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Draw function
function draw() {
    // Black background with transparency
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00ff41'; // Matrix green
    ctx.font = fontSize + 'px monospace';

    // Loop through drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
    }
}

// Animation loop
setInterval(draw, 35);

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Recalculate columns
    const newColumns = canvas.width / fontSize;
    
    // Adjust drops array
    if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
            drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
        }
    } else if (newColumns < drops.length) {
        drops.splice(newColumns);
    }
});

