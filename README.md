# FullView Pro - Chrome Extension

## Description
FullView Pro is a lightweight Chrome extension that allows users to toggle fullscreen mode on any website with a single click. The extension adds a floating icon to all web pages, which can be clicked to enter or exit fullscreen mode. Users can also choose to temporarily hide the icon from the extension settings.

## Features
- One-click fullscreen mode activation.
- Floating icon with an intuitive design.
- Option to temporarily hide the icon.
- Simple and minimalistic UI.
- Works on all websites.

## Installation
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer Mode** (toggle in the top-right corner).
4. Click **"Load Unpacked"** and select the extracted folder.
5. The extension will be installed and ready to use.

## File Structure
```
FullView Pro/
│── manifest.json        # Chrome extension manifest file
│── background.js        # Background script for handling settings
│── content.js           # Injects the fullscreen button into web pages
│── popup.html           # Popup UI for extension settings
│── popup.js             # Manages settings like hiding/showing the icon
│── options.html         # Additional settings page
│── icon.png             # Extension icon
```

## Usage
1. Click on the floating icon to toggle fullscreen mode.
2. Open the extension popup to hide or show the icon.
3. Changes are automatically saved in Chrome storage.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

---
Developed by Nutshell Bytes 🚀

