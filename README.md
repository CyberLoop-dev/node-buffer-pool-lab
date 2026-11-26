<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f172a,100:0f766e&height=170&section=header&text=node%20buffer%20pool%20lab&fontSize=36&fontColor=ffffff&animation=twinkling" alt="Animated wave header"/></p>
<p align="center"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=900&color=14B8A6&center=true&vCenter=true&width=760&lines=node%20buffer%20pool%20lab%20%7C%20inspect%2C%20understand%2C%20improve" alt="Animated title"/></p>
<p align="center"><img src="https://img.shields.io/github/license/CyberLoop-dev/node-buffer-pool-lab?style=for-the-badge" alt="License"/> <img src="https://img.shields.io/github/languages/top/CyberLoop-dev/node-buffer-pool-lab?style=for-the-badge" alt="Language"/> <img src="https://img.shields.io/github/stars/CyberLoop-dev/node-buffer-pool-lab?style=for-the-badge" alt="Stars"/> <img src="https://img.shields.io/github/last-commit/CyberLoop-dev/node-buffer-pool-lab?style=for-the-badge" alt="Last commit"/></p>
<p align="center"><img src="assets/mark.svg" alt="node-buffer-pool-lab project mark" width="520"/></p>

## 🧭 Overview

`node-buffer-pool-lab` demonstrates how small Node.js Buffer allocations can share a backing ArrayBuffer. It compares pooled and unpooled allocation paths and reports byte offsets and storage identity. Every unsafe allocation is filled immediately before any bytes are read.

## ✨ Features

- 🧪 Compares `Buffer.alloc`, `Buffer.allocUnsafe`, and `Buffer.allocUnsafeSlow`
- 🧱 Reports backing-store sharing and byte offsets
- 🛡️ Fills unsafe allocations immediately; never displays uninitialized memory
- 📊 Shows the configured `Buffer.poolSize` and allocation metadata
- 📄 Supports text and JSON output

## 🧪 Demo

Run `node src/cli.js`. The report compares three allocation styles and whether small pooled buffers share a backing store. No hosted demo is published.

## 🚀 Quick Start

```bash
node src/cli.js
node src/cli.js --json
npm test
```
Requires Node.js 18 or newer. No package installation is needed.

## 🧰 Tech Stack

- **Stack:** Node.js built-in Buffer API and node:test
- **Approach:** small, local-first tooling with clear output

## 🗂️ Folder Structure

```text
node-buffer-pool-lab/
├── assets/mark.svg
├── src/cli.js
├── tests/buffer.test.js
├── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## 🛣️ Roadmap

- Add configurable allocation sizes and repeated sampling
- Explain pool threshold behavior across Node.js versions

## 🤝 Contributing

Issues and focused pull requests are welcome. Explain the use case, keep changes small, and add tests for behavior changes. Run the project using the Quick Start instructions before submitting.

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center"><img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f766e,100:0f172a&height=120&section=footer&animation=twinkling" alt="Animated wave footer"/></p>
