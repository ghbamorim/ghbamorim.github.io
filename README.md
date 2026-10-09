# Gustavo Amorim — Resume

Personal resume website built with HTML and CSS, hosted on GitHub Pages.

The repository also includes an automated workflow that generates a PDF version of the resume using Playwright and deploys both versions to GitHub Pages.

## Live Resume

- **Website:** https://ghbamorim.github.io/
- **Download PDF:** https://ghbamorim.github.io/resume.pdf

## Tech Stack

- HTML5 and CSS3
- Node.js
- Playwright
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── pdf.yml
├── scripts/
│   └── generate-pdf.js
├── index.html
└── README.md
```

## Automated Deployment

Every push to the `main` branch triggers a GitHub Actions workflow that:

1. Installs Node.js and Playwright.
2. Generates an A4 PDF from `index.html`.
3. Prepares the website and PDF for deployment.
4. Publishes both files to GitHub Pages.

This keeps the online resume and downloadable PDF synchronized.

## Local PDF Generation

Install Playwright:

```bash
npm install --no-save playwright@1.58.2
npx playwright install chromium
```

Generate the PDF:

```bash
node scripts/generate-pdf.js
```

The generated file will be saved as `resume.pdf`.

## Author

**Gustavo Amorim**  
Full Stack Developer

[View Resume](https://ghbamorim.github.io/)
