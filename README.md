<div align="center">

# Flow Automation

Batch prompt automation and media downloader Chrome extension for Google Flow.

[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![Version](https://img.shields.io/badge/Version-1.0-4F46E5.svg)](https://github.com/Yeamin-Sheikh/Flow-Automation/releases/tag/v1.0)
[![Platform](https://img.shields.io/badge/Platform-Chrome-4285F4.svg)](https://www.google.com/chrome/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

Flow Automation is a Chrome extension for batch prompt automation and automatic media downloading on Google Flow (flow.google.com). It runs inside Chrome's native side panel, allowing you to queue multi-line prompts, upload prompt files, configure randomized intervals, and save generated video and image files directly to local storage.

The extension operates with full offline autonomy. All 58 DOM automation selectors run locally in the browser with no external server dependencies, user accounts, or prompt limits.

---

## Supported automation modes

| Mode | Input | Google Flow target | Output |
|---|---|---|---|
| Text to Video | Written prompt list | Veo video models | MP4 video files |
| Image to Video | Reference image + prompt | Keyframe animation | MP4 video files |
| Components to Video | Character, scene, ingredients + prompt | Multi-ingredient video pipeline | MP4 video files |
| Text to Image | Written prompt list | Imagen models | WebP / PNG image files |
| Image to Image | Reference images + prompt | Image variation pipeline | WebP / PNG image files |
| Agent Automation | Multi-turn directorial prompts | Flow Agent creative engine | Full project outputs |

---

## Capabilities

- Batch prompt input: Enter prompts manually, upload `.txt` files, or import `.xlsx` and `.csv` spreadsheets.
- Execution controls: Configure prompt concurrency and random delay intervals to avoid rate limits.
- Automated media extraction: Detects finished generation tiles on the canvas and triggers background downloads automatically.
- Resolution selection: Supports 1080p, 2K, and 4K downloads when available in Google Flow.
- Custom file routing: Define download folder names and filename prefixes for structured media organization.
- Local selector engine: Bundles all 58 Google Flow DOM selectors locally, eliminating external configuration dependencies.
- English interface: Stripped of secondary language dictionaries to reduce bundle size to 1.1 MB.
- Streamlined layout: Control tabs start directly at the top of the side panel without header clutter.

---

## Installation

### Option 1: Load from release archive

1. Download `Flow-Automation-v1.0.zip` from the [Releases page](https://github.com/Yeamin-Sheikh/Flow-Automation/releases/tag/v1.0).
2. Extract the zip archive to a local folder on your computer.
3. Open Google Chrome and navigate to `chrome://extensions/`.
4. Turn on the Developer mode toggle in the top-right corner.
5. Click the "Load unpacked" button in the top-left menu.
6. Select the extracted folder containing `manifest.json`.

### Option 2: Clone from source

1. Clone the repository locally:
   ```bash
   git clone https://github.com/Yeamin-Sheikh/Flow-Automation.git
   ```
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable Developer mode.
4. Click "Load unpacked" and select the cloned directory.

---

## How to use

1. Navigate to [flow.google.com](https://flow.google.com) and sign in to your Google account.
2. Click the Flow Automation icon in the Chrome toolbar or open the Chrome side panel.
3. Select your desired generation mode under the Control tab (such as Text to Video or Components to Video).
4. Set execution parameters:
   - Concurrency: Number of prompts processed simultaneously.
   - Random delay: Minimum and maximum pause between consecutive submissions in seconds.
   - Resolution: Choose preferred download quality (1080p, 2K, or 4K).
5. Add prompts in the Prompts field, or upload a `.txt` or `.xlsx` file.
6. Click Start. The extension interacts with Google Flow, submits each prompt, waits for generation, and saves the resulting files into your configured folder.

---

## Project structure

```text
Flow-Automation/
├── manifest.json              Manifest V3 configuration, permissions, and icons
├── service-worker-loader.js   Entry point for background service worker
├── logo.png                   Extension icon asset
├── assets/
│   ├── catchUploadFile.*.js   File input interceptor for Flow uploads
│   ├── index-*.css            Tailwind CSS styling and PrimeVue tokens
│   ├── index.html-*.js        Compiled Vue side panel application logic and UI
│   ├── index.ts-*.js          Content scripts and background service worker logic
│   ├── primeicons-*           Icon font assets (woff2, eot, svg, ttf, woff)
│   ├── remoteConfig-*.js      Local selector registry with 58 Google Flow selectors
│   └── utils-*.js             DOM query utilities and helper routines
└── src/
    ├── assets/                Source icon assets
    └── ui/
        └── side-panel/        Side panel entry HTML
```
