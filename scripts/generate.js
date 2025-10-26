// scripts/generate.js
const fs = require('fs');
const { createCanvas } = require('canvas');

// Parametreler
const text = process.env.TEXT || 'Merhaba GitHub Pages';
const fileName = (process.env.FILENAME || 'og-image') + '.png';
const width = 1200;
const height = 630;

// Canvas oluştur
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Arka plan
ctx.fillStyle = '#2b2b2b';
ctx.fillRect(0,0,width,height);

// Metin ayarları
const fontSize = 80;
ctx.font = `bold ${fontSize}px Sans`;
ctx.fillStyle = '#ffffff';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Çok satırlı destek
const lines = text.split('\\n');
const lineHeight = fontSize * 1.2;
const startY = height/2 - ((lines.length-1)*lineHeight)/2;

lines.forEach((line, i) => {
  ctx.fillText(line, width/2, startY + i*lineHeight);
});

// PNG oluştur ve generated klasörüne yaz
if (!fs.existsSync('generated')) fs.mkdirSync('generated');
const out = fs.createWriteStream(`generated/${fileName}`);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on('finish', () => console.log('Image created:', fileName));
