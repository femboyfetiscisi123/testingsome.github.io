// URL parametrelerini al
const urlParams = new URLSearchParams(window.location.search);
const textParam = urlParams.get('text') || 'Merhaba Dünya!';

// Canvas ve context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Input elementleri
const textInput = document.getElementById('textInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const fontSizeValue = document.getElementById('fontSizeValue');
const colorInput = document.getElementById('colorInput');
const generatedUrl = document.getElementById('generatedUrl');

// Başlangıç değerleri
textInput.value = textParam;
updateCanvas();
updateUrl();

// Event listeners
textInput.addEventListener('input', () => {
    updateCanvas();
    updateUrl();
});

fontSizeInput.addEventListener('input', () => {
    fontSizeValue.textContent = fontSizeInput.value + 'px';
    updateCanvas();
    updateUrl();
});

colorInput.addEventListener('input', () => {
    updateCanvas();
    updateUrl();
});

function updateCanvas() {
    const text = textInput.value || 'Merhaba Dünya!';
    const fontSize = parseInt(fontSizeInput.value);
    const color = colorInput.value;

    // Canvas'ı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gradient arka plan
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Metin ayarları
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Metin gölgesi
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Metni çiz (çok satırlı destek)
    const lines = text.split('\n');
    const lineHeight = fontSize * 1.2;
    const startY = canvas.height / 2 - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, startY + (index * lineHeight));
    });
}

function updateUrl() {
    const text = encodeURIComponent(textInput.value || 'Merhaba Dünya!');
    const fontSize = fontSizeInput.value;
    const color = encodeURIComponent(colorInput.value);

    const baseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
    const url = `${baseUrl}resim.html?text=${text}&size=${fontSize}&color=${color}`;

    generatedUrl.textContent = url;
}

