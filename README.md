# 🔐 Login Form Automation Testing

This project demonstrates how to test a simple login form using Cypress.

## 💻 Features

- Validates required fields
- Checks for invalid email format
- Confirms successful login with correct credentials

## 📁 Project Structure

- `index.html`: Basic login form with email & password validation.
- `login.cy.js`: Cypress test cases for form validation.
- `cypress.config.js`: Cypress configuration.
- `http-server`: Used to serve HTML on `localhost`.

## 🚀 How to Run

```bash
npm install
npm run serve    # to serve the HTML on localhost:8080
npx cypress open # to run Cypress tests
