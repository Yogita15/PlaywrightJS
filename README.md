Playwright Test Automation

This project contains automated tests for various applications using Playwright with JavaScript.
It is designed to ensure application functionality through fast, reliable, and cross-browser end-to-end testing.

Clone this repository and install dependencies:
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install

Run all tests:
npx playwright test

Run tests in a specific file:
npx playwright test tests/example.spec.js

Run tests in headed mode (to see the browser):
npx playwright test --headed

Run tests in a specific browser:
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

Project Structure
├── tests/                # Test files
│   ├── example.spec.js   # Sample test
│   └── ...
├── playwright.config.js  # Playwright configuration
├── package.json          # Project dependencies & scripts
└── README.md             # Documentation

You can customize playwright.config.js to change:
Test timeout
Browser/project setup
Reporters (HTML, JSON, etc.)
Screenshot/video settings

Generate an HTML test report:
npx playwright show-report

Contributions are welcome! Feel free to open issues or submit pull requests.
