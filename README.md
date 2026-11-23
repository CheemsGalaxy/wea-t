# Wea-T

[Tiếng Việt](#vi) | [English](#en) | [Ủng hộ](#donate)

<a name="vi"></a>
## Tiếng Việt

Wea-T là bộ công cụ tiện ích cá nhân gói gọn trong một file `index.html` duy nhất. Mọi thao tác xử lý ảnh, nén tệp, chuyển đổi định dạng, tạo và quét mã QR đều chạy trực tiếp trên trình duyệt, không cần cài đặt hay máy chủ trung gian.

[Mở trên web](https://cheemsgalaxy.github.io/wea-t/) | [Discord](https://discord.gg/n7JTT7ssNR) | [YouTube](https://www.youtube.com/@cheemsnogy) | [GitHub](https://github.com/CheemsGalaxy)

### Cách sử dụng

- **Dùng trực tiếp trên web:** Mở [cheemsgalaxy.github.io/wea-t](https://cheemsgalaxy.github.io/wea-t/).
- **Chạy cục bộ (Offline):**
  1. Tải file `index.html` về máy hoặc clone repository.
  2. Mở trực tiếp `index.html` bằng trình duyệt bất kỳ (Chrome, Edge, Firefox, Safari).
- **Tự deploy:** Có thể đẩy thẳng lên GitHub Pages, Cloudflare Pages hoặc Vercel mà không cần bước build.

### Các module chính

| Module | Chức năng | Ghi chú |
|---|---|---|
| Home | Universal Dropzone, thẻ thời tiết trực tiếp và lịch sử gần đây. | Thả tệp hoặc dán `Ctrl + V` để tự chuyển sang đúng công cụ. |
| Weather | Thời tiết trực tiếp, dự báo 24h (biểu đồ SVG), 5 ngày, AQI và chu kỳ Mặt trời. | Hỗ trợ tìm không dấu, viết tắt (`HN`, `HCM`, `DN`), tọa độ `lat, lon` và GPS. |
| Rounder | Bo tròn góc ảnh hàng loạt chuẩn Circular và iOS Squircle G2. | Chỉnh chung hoặc từng góc (`px` / `%`), thêm nền/viền, copy ảnh hoặc xuất ZIP. |
| Compress | Nén đa định dạng: Ảnh, SVG, PDF, Audio, Video, Code và tệp bất kỳ. | Soi Before/After cho ảnh, nén PNG 8-bit, Smart Guard chống nén ngược. |
| Video DL | Nhận diện link đa nền tảng, tải TikTok không logo, tạo script `.BAT`/`.SH`. | Hỗ trợ tải hàng loạt bằng `yt-dlp` + `ffmpeg` và ghép Video + Audio trên trình duyệt. |
| Convert | Chuyển đổi qua lại Ảnh, Audio/Video, Dữ liệu (`JSON`/`CSV`/`XML`/`YAML`) và Tài liệu. | Hỗ trợ gộp nhiều ảnh thành 1 PDF, dán dữ liệu thô và xem trước kết quả. |
| QR Studio | Tạo QR tùy biến sâu, Barcode 1D và quét mã qua Camera hoặc ảnh. | Hỗ trợ `URL`, `Wi-Fi`, `VietQR` (NAPAS), `vCard`, xuất PNG 1024px và SVG vector thật. |

#### Nén đa định dạng (Compress)

- **Ảnh & Vector (`PNG`, `JPG`, `WebP`, `SVG`):** Tùy chỉnh chất lượng, giới hạn kích thước tối đa, nén PNG 8-bit qua `UPNG.js`, rút gọn mã nguồn SVG và so sánh trực tiếp Before/After.
- **PDF (`.pdf`):** Đọc và nén lại tài liệu nặng qua `pdf.js` theo 3 mức 72 / 110 / 150 DPI.
- **Âm thanh (`WAV`, `MP3`, `M4A`, `OGG`, `FLAC`):** Hạ tần số lấy mẫu, gộp Mono, xuất `MP3` (`lamejs`) hoặc `WebM Opus`.
- **Video (`MP4`, `WebM`, `MOV`):** Hạ độ phân giải (720p / 480p / 360p), chỉnh Bitrate, tùy chọn tắt tiếng với thanh tiến trình theo thời gian thực.
- **Code & tệp khác:** Minify `JSON`, `CSS`, `HTML`, `XML`; nén `ZIP` (DEFLATE level 9) hoặc `GZIP (.gz)` bằng `CompressionStream`.

#### Tải video và ghép luồng (Video DL)

- **TikTok & link trực tiếp:** Lấy luồng HD không logo và MP3 trực tiếp ngay trên trình duyệt.
- **YouTube, Facebook, Instagram, X, Bilibili và 1000+ trang:** Tạo file `.BAT` (Windows) hoặc `.SH` (macOS/Linux) tự tải `yt-dlp` và `ffmpeg` vào thư mục Downloads, hoặc mở nhanh qua Cobalt Web.
- **Ghép Video + Audio:** Ghép trực tiếp trên trình duyệt qua `MediaRecorder`, có thanh tiến trình và nút hủy.

### Phím tắt

| Phím tắt | Tác dụng |
|---|---|
| `Ctrl + K` / `Cmd + K` | Mở Command Palette (chuyển tab, đổi theme, tìm thành phố, đổi preset video) |
| `Alt + 1` đến `Alt + 7` | Chuyển nhanh giữa 7 module |
| `Ctrl + V` | Dán ảnh, tệp, văn bản hoặc link vào công cụ đang mở |
| `/` | Focus nhanh ô tìm kiếm thành phố trong tab Weather |
| `Esc` | Đóng modal, dropdown hoặc Command Palette |

### Kiến trúc và quyền riêng tư

- **Xử lý cục bộ:** Toàn bộ ảnh, PDF, audio, video, dữ liệu và mã QR được xử lý trực tiếp trên thiết bị. Không có backend, tài khoản hay analytics.
- **Lazy-loading:** Các thư viện nặng (`JSZip`, `UPNG.js`, `pdf.js`, `lamejs`, `qrcode-generator`, `JsBarcode`, `jsQR`) chỉ tải khi người dùng mở đúng tính năng cần dùng.
- **Lưu cấu hình:** Theme, thành phố đã ghim, lịch sử gần đây và cài đặt của Rounder / QR Studio được lưu trong `localStorage`.
- **Dịch vụ bên ngoài nhận request:**
  - `open-meteo.com`: lấy dữ liệu thời tiết, chất lượng không khí và geocoding khi dùng tab Weather.
  - `api.bigdatacloud.net`: đổi tọa độ GPS sang tên địa điểm khi bấm định vị.
  - `noembed.com` và `tikwm.com`: lấy metadata video và luồng tải trực tiếp TikTok khi dán link vào tab Video DL.

### Tác giả và giấy phép

| Liên hệ | Link |
|---|---|
| Tác giả | [CheemsGalaxy](https://github.com/CheemsGalaxy) |
| YouTube | [@cheemsnogy](https://www.youtube.com/@cheemsnogy) |
| Discord | [Server cộng đồng](https://discord.gg/n7JTT7ssNR) |

Phát hành theo [MIT License](LICENSE).

Copyright (c) 2026 CheemsGalaxy.

Dữ liệu thời tiết và AQI từ [Open-Meteo](https://open-meteo.com/).

[Lên đầu trang](#wea-t) | [Chuyển sang English](#en)

---

<a name="en"></a>
## English

Wea-T is a personal utility studio packaged into a single `index.html` file. Image editing, file compression, format conversion, and QR generation/scanning run directly in the browser with no installation or backend server.

[Open Web App](https://cheemsgalaxy.github.io/wea-t/) | [Discord](https://discord.gg/n7JTT7ssNR) | [YouTube](https://www.youtube.com/@cheemsnogy) | [GitHub](https://github.com/CheemsGalaxy)

### Usage

- **Use online:** Open [cheemsgalaxy.github.io/wea-t](https://cheemsgalaxy.github.io/wea-t/).
- **Run locally (Offline):**
  1. Download `index.html` or clone the repository.
  2. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).
- **Self-host:** Deploy statically to GitHub Pages, Cloudflare Pages, or Vercel with no build step.

### Core modules

| Module | Function | Notes |
|---|---|---|
| Home | Universal Dropzone, live weather card, and recent activity. | Drop files or press `Ctrl + V` to auto-route to the right tool. |
| Weather | Live weather, 24h forecast (SVG sparkline), 5-day forecast, AQI, and sun cycle. | Supports diacritic-insensitive search, abbreviations (`HN`, `HCM`, `DN`), `lat, lon`, and GPS. |
| Rounder | Batch Circular and iOS Squircle G2 corner rounding. | Uniform or per-corner (`px` / `%`), background/border, 1-click image copy, and ZIP export. |
| Compress | Multi-format compression for Images, SVG, PDF, Audio, Video, Code, and any file. | Before/After image slider, 8-bit PNG quantization, and Smart Guard against size inflation. |
| Video DL | Multi-platform link detection, watermark-free TikTok downloads, and `.BAT`/`.SH` scripts. | Supports batch downloads via `yt-dlp` + `ffmpeg` and in-browser Video + Audio muxing. |
| Convert | Local conversion across Images, Audio/Video, Data (`JSON`/`CSV`/`XML`/`YAML`), and Docs. | Supports multi-image PDF merge, raw text paste, and output preview. |
| QR Studio | Customizable QR generator, 1D Barcodes, and Camera/image scanner. | Supports `URL`, `Wi-Fi`, `VietQR` (NAPAS), `vCard`, 1024px PNG, and true vector SVG export. |

#### Multi-format compression (Compress)

- **Images & Vector (`PNG`, `JPG`, `WebP`, `SVG`):** Quality slider, max dimension cap, 8-bit PNG compression via `UPNG.js`, SVG minifier, and Before/After split-view comparison.
- **PDF (`.pdf`):** Re-compresses heavy PDFs via `pdf.js` at 72 / 110 / 150 DPI presets.
- **Audio (`WAV`, `MP3`, `M4A`, `OGG`, `FLAC`):** Sample rate downsampling, Mono mixdown, and `MP3` (`lamejs`) or `WebM Opus` output.
- **Video (`MP4`, `WebM`, `MOV`):** Resolution scaling (720p / 480p / 360p), bitrate control, optional mute, and real-time progress bar with cancel.
- **Code & other files:** Minifies `JSON`, `CSS`, `HTML`, `XML`; compresses arbitrary files to `ZIP` (DEFLATE level 9) or `GZIP (.gz)` via `CompressionStream`.

#### Video downloads and muxing (Video DL)

- **TikTok & direct media:** Fetches watermark-free HD video and MP3 streams directly in the browser.
- **YouTube, Facebook, Instagram, X, Bilibili, and 1000+ sites:** Generates self-bootstrapping `.BAT` (Windows) or `.SH` (macOS/Linux) scripts using `yt-dlp` and `ffmpeg`, or opens Cobalt Web with the URL copied.
- **Video + Audio muxer:** Merges separate video and audio files in the browser via `MediaRecorder` with progress tracking and cancel support.

### Keyboard shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl + K` / `Cmd + K` | Open Command Palette (switch views, toggle theme, search city, pick video preset) |
| `Alt + 1` to `Alt + 7` | Jump directly to any of the 7 modules |
| `Ctrl + V` | Paste images, files, text, or URLs into the active tool |
| `/` | Focus city search inside the Weather tab |
| `Esc` | Close modals, dropdowns, or Command Palette |

### Architecture and privacy

- **Local processing:** All images, PDFs, audio, video, structured data, and QR codes are processed on your device. No backend, accounts, or analytics.
- **Lazy-loading:** Heavy libraries (`JSZip`, `UPNG.js`, `pdf.js`, `lamejs`, `qrcode-generator`, `JsBarcode`, `jsQR`) load on demand only when needed.
- **Local storage:** Theme, pinned cities, recent history, and Rounder / QR Studio preferences stay in `localStorage`.
- **External services receiving requests:**
  - `open-meteo.com`: weather, air quality, and geocoding in the Weather tab.
  - `api.bigdatacloud.net`: reverse geocoding when using GPS location.
  - `noembed.com` and `tikwm.com`: video metadata and direct TikTok streams when pasting links in Video DL.

### Author and license

| Contact | Link |
|---|---|
| Author | [CheemsGalaxy](https://github.com/CheemsGalaxy) |
| YouTube | [@cheemsnogy](https://www.youtube.com/@cheemsnogy) |
| Discord | [Community server](https://discord.gg/n7JTT7ssNR) |

Released under the [MIT License](LICENSE).

Copyright (c) 2026 CheemsGalaxy.

Weather and AQI data come from [Open-Meteo](https://open-meteo.com/).

---

<a name="donate"></a>

<div align="center">

### ☕ Support This Project - Ủng hộ dự án 💌 - Donate:

[![Donate MoMo](https://img.shields.io/badge/Donate-MoMo-pink?style=for-the-badge&logo=momo&logoColor=white)](https://me.momo.vn/chimchimkl28)

<img src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://me.momo.vn/chimchimkl28" alt="MoMo QR Code" width="180"/>

</div>

[Back to top](#wea-t) | [Tiếng Việt](#vi) | [English](#en)
