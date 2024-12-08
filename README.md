# Cypress Automation Examples

This repository contains Cypress examples showcasing:

- End-to-End (E2E) testing scenarios for web applications.
- API automation and validation through Cypress.

Our goal is to provide practical, well-documented examples to help QA engineers and developers learn and implement Cypress effectively.

# Project Structure

- cypress/
- - e2e/               # Contains E2E test cases
- - api/               # Contains API automation test cases
- - fixtures/          # Test data (e.g., JSON files for mock responses)
- - support/           # Reusable commands and test configuration
- .gitignore             # Ignore some files for updatings on git 
- cypress.config.js      # Cypress configuration file
- package.json           # Project dependencies and scripts
- README.md              # Project documentation

# Getting Started

1. Prerequisites
Ensure you have the following installed:

Node.js (version 14 or higher)
* npm or yarn

2. Installation
Clone this repository:

* git clone https://github.com/your-repo/cypress-automation-examples.git
* cd cypress-automation-examples

Install dependencies:

* npm install

3. Running Tests
Run E2E Tests in Interactive Mode
* npx cypress open

Choose the desired test spec file in the Cypress GUI.

* npx cypress run --spec "cypress/e2e/**/*.cy.js"

Run API Tests

* npx cypress run --spec "cypress/api/**/*.cy.js"

- How to contribute
We welcome contributions to improve these examples

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Submit a pull request.


# Contact
For questions or feedback, feel free to reach out:

Email: marcospaes35@gmail.com   
LinkedIn: https://www.linkedin.com/in/paesmarcos96/