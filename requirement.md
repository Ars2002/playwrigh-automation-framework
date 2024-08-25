# Salesforce Automation Testing Framework

## Project Overview

This framework is designed to automate the testing of the Salesforce Application Under Test (AUT). The framework aims to provide a structured and scalable approach to writing, executing, and reporting test cases for the Salesforce platform. It supports functional, regression, and API testing, with comprehensive logging and reporting capabilities.

## Scope of Automation

### In-Scope Features
- **Salesforce User Interfaces (UI):** Automation of key UI workflows, including login, navigation, record creation, and data validation.
- **Salesforce APIs:** Automation of Salesforce REST API testing for CRUD operations and integration testing.
- **Regression Testing:** Automated execution of regression test cases to ensure new changes do not affect existing functionality.

### Out-of-Scope Features
- **Non-Salesforce Platforms:** Testing of third-party applications integrated with Salesforce is currently out of scope.
- **Performance Testing:** Load and stress testing of Salesforce applications are not included in this framework.

## Tools and Technologies

- **Playwright:** For UI automation and interaction with Salesforce web elements.
- **Node.js:** The framework is built on Node.js, providing a robust environment for test execution.
- **Salesforce REST API:** For automating API testing within the Salesforce ecosystem.
- **Jest/Mocha:** For structuring and running test cases, depending on project needs.
- **Allure:** For generating detailed test reports.
- **Log4js:** For logging test execution details.

## Directory Structure

### `testcases/`
Contains all the test scripts organized by feature or module. Each script is designed to be independent and reusable.

### `pages/`
Houses the Page Object Model (POM) classes representing Salesforce UI pages. This promotes code reusability and separation of concerns.

### `utils/`
Contains utility classes and functions that provide common services such as date handling, string manipulation, and configuration management.

### `config/`
Stores configuration files, including environment variables, test data, and Salesforce-specific settings (e.g., login credentials, API endpoints).

### `api/`
Includes scripts and modules for automating Salesforce API testing. This directory also contains API request and response templates.

### `reports/`
Generated test execution reports are stored here, providing insights into test coverage and outcomes. Supports integration with CI/CD tools for automated reporting.

### `logs/`
Contains logs of all test executions, capturing detailed information on each test run. Useful for debugging and audit purposes.

### `data/`
Holds test data in various formats (e.g., JSON, CSV, XML) used across test cases. This allows for data-driven testing and easier test maintenance.

## Test Environments

- **Development Environment:** Used for initial testing and validation of test scripts.
- **Staging Environment:** Used for final validation before deploying to production. Mirrors the production environment as closely as possible.
- **Production Environment:** Automation tests are executed on a subset of critical workflows to ensure functionality.

## Automation Strategy

- **Page Object Model (POM):** Used to represent Salesforce UI pages, ensuring modularity and maintainability.
- **Data-Driven Testing:** Tests are parameterized using external data sources to cover various scenarios.
- **API Testing:** Automated testing of Salesforce REST APIs to ensure the backend functionality is working as expected.
- **Continuous Integration (CI):** The framework supports integration with CI tools (e.g., Jenkins, GitLab CI) for automated test execution and reporting.

## Test Case Identification

- **High Priority:** Core Salesforce functionalities like user authentication, record management (Accounts, Contacts), and data export.
- **Medium Priority:** Workflow automation, approval processes, and integration points.
- **Low Priority:** UI elements with low user interaction, such as help text and footers.

## Success Criteria

- **Test Coverage:** 80% or higher coverage of critical Salesforce functionalities.
- **Execution Time:** Test suite execution time should be within acceptable limits (e.g., 2 hours).
- **Reliability:** Tests should have a pass rate of 95% or higher without flaky tests.

## Assumptions and Constraints

- **Stable Environments:** Test environments should be stable and available for test execution.
- **Data Availability:** Test data should be available and consistent across environments.
- **Tool Compatibility:** All tools and libraries used should be compatible with the Salesforce platform and Node.js.

## Maintenance and Updates

- **Regular Updates:** The framework will be updated regularly to include new test cases, tools, and techniques.
- **Version Control:** All changes will be tracked using Git, with proper versioning and branching strategies.

## Risks and Mitigations

- **Frequent Salesforce Updates:** Salesforce’s regular updates might break existing test scripts. Mitigation: Regular review and update of test scripts following Salesforce releases.
- **Flaky Tests:** Tests might fail intermittently due to environment issues. Mitigation: Implement robust retry logic and environment checks.

## References

- [Salesforce Documentation](https://developer.salesforce.com/docs/)
- [Playwright Documentation](https://playwright.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
