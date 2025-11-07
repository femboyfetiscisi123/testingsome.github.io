# 🎨 Meme Generator

Create professional memes with custom images and text. Fork it, add your own images, and have your own meme website!

## 🚀 Quick Start

### 🍴 Fork & Create Your Own Meme Site!

1. **Fork this repo**
2. **Add your images to `contents/images/` folder**
3. **Enable GitHub Pages** (Settings → Pages → Deploy from branch)
4. **Your meme site is ready!** 🎉

## ✨ What You Can Do

- 🖼️ **Use popular meme templates** from Imgflip
- 📁 **Add your own images** - they'll appear in the dropdown automatically
- 📝 **Multiple text boxes** with custom positioning
- 🎨 **Customize fonts, colors, shadows**
- 💾 **Download as PNG** or get shareable URL
- 📱 **Mobile friendly** design

## 🔗 Create Custom Short URLs

You can create custom short URLs that redirect to your memes:

### How it works:
1. **Create a folder** with your desired URL name (e.g., `meme/`)
2. **Add an `index.html`** that redirects to `resim.html` with parameters
3. **Share the short URL:** `yourdomain.com/meme`

### Example Setup:

**Create folder:** `drake-meme/`

**Create file:** `drake-meme/index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=../meme.html?text=USING%20ONLINE%20GENERATORS&size=35&color=%23000000&x=400&y=120&t1_text=FORKING%20THIS%20REPO&t1_x=400&t1_y=280&template=181913649">
</head>
<body>
    <p>Redirecting to meme...</p>
</body>
</html>
```

**Result:** `yourdomain.com/drake-meme` → Shows your custom Drake meme!

### URL Parameters for meme.html:
- `text` - Main text
- `size` - Font size (20-100) 
- `color` - Text color (hex: %23ffffff for white)
- `x`, `y` - Position coordinates
- `t1_text`, `t1_x`, `t1_y` - Second text box
- `template` - Imgflip template ID
- `bg` - Custom background image URL

## 🌐 Demo

**Live Demo:** [https://username.github.io/meme-generator/](https://username.github.io/meme-generator/)

**Custom Short URL Example:** 
- Long URL: `resim.html?text=WHEN%20YOU%20FORK&size=40&template=181913649`
- Short URL: `yourdomain.com/example-meme` 
- **Try it:** Check the `example-meme/` folder in this repo!

## 🛠️ Local Development

```bash
git clone https://github.com/username/meme-generator.git
cd meme-generator
python -m http.server 8000
# Open http://localhost:8000
```

## 📁 Project Structure

```
📁 meme-generator/
├── 📄 create-static-image.html # Main meme creator
├── 📄 resim.png               # PNG API endpoint
├── 📄 script.js               # Main JavaScript
└── 📁 contents/images/        # 🎯 ADD YOUR IMAGES HERE!
```

## 🎨 Why Fork This?

- ✅ **Your own image collection** - Add favorite templates
- ✅ **Free hosting** with GitHub Pages
- ✅ **Customize everything** - colors, fonts, layout
- ✅ **Share with friends** - your personal meme site

---

<div align="center">

### 🍴 [FORK NOW & CREATE YOUR MEME SITE!](../../fork)

[![Fork](https://img.shields.io/github/forks/username/meme-generator?style=social)](../../fork)
[![Stars](https://img.shields.io/github/stars/username/meme-generator?style=social)](../../stargazers)

⭐ **Star if you like it!**

</div>