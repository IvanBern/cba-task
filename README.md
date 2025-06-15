# CBA Navigation Menu Tests

This project contains automated tests for the Commonwealth Bank website's navigation menu, testing both mobile and desktop views.

## Features

- Tests navigation menu items in both mobile and desktop views
- Handles responsive design with automatic viewport detection
- Includes detailed logging for debugging
- Generates HTML reports with test results
- Supports video recording of test execution

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cba-task
```

2. Install dependencies:
```bash
npm install
```

## Running Tests

### Desktop View

To run tests in desktop view with visible browser:
```bash
npm run cy:open
```

To run tests in desktop view in headless mode:
```bash
npm run cy:run
```

### Mobile View

To run tests in mobile view (375x812) with visible browser:
```bash
npm run cy:open:mobile
```

To run tests in mobile view in headless mode:
```bash
npm run cy:run:mobile
```

### Generating Reports

To generate HTML reports with test results:
```bash
npm run cy:report
```

For mobile view reports:
```bash
npm run cy:report:mobile
```

## Test Structure

The tests are located in `cypress/e2e/frontend.cy.js` and include:

- Navigation menu tests for both mobile and desktop views
- Automatic viewport detection
- Handling of hamburger menu in mobile view
- Verification of page loads and URL changes

## Configuration

The project uses the following key configurations:

- `cypress.config.js`: Main Cypress configuration
- `.eslintrc.js`: ESLint configuration for code quality
- `package.json`: Project dependencies and scripts

## Available Scripts

- `cy:open`: Opens Cypress in desktop view
- `cy:run`: Runs tests in headless desktop view
- `cy:open:mobile`: Opens Cypress in mobile view
- `cy:run:mobile`: Runs tests in headless mobile view
- `cy:report`: Generates HTML reports for desktop tests
- `cy:report:mobile`: Generates HTML reports for mobile tests

## Test Reports

Test reports are generated using `cypress-mochawesome-reporter` and include:
- Test results summary
- Detailed test steps
- Screenshots of failures
- Video recordings of test execution

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the ISC License.

## Frontend:

Using your choice of Browser Automation Tool (preferably JS or JS based) automate the following test scenario.
Open the website https://www.commbank.com.au/ and click on all tabs from the top header such as Banking, Insurance etc. 
Checkpoints:
a)	The test should be able to verify that all pages have been successfully loaded
b)	Same test should work across different viewports
c)	Same test should work across Chrome and Firefox

## API:

1)	Register for Oxford'sPublic APIs by setting up Prototype account. 
2)	Follow the steps mentioned to Get your App Key and ID as well as Making Requests to the API.
3)	Setup a Project that returns the origin of the word Insurance
4)	Write scenarios for step 3 which will return a 404 and 400 in response
5)	Setup a Project to translate `Test` into French
6)	 Write scenarios for step 5 which will return a 404 and 400 in response

## Miscellaneous:

You are about to test feature for CommBank users on mobile app and website. The users are able to save their monthly expenses on both platforms. When  expenses cross the monthly limit a notification is sent to the user. 

How will you test this feature on both mobile app and desktop site ?


---

# Solutions

## How to run
Clone the repo and Install npm dependencies

```
npm install
```

## Frontend testing

### Run tests 
```
npm "cy:run"
```

or 

```
./node_modules/.bin/cypress run

```

### Run tests in different browser and viewports

#### Run test in Chrome with FullHD screensize
```
./node_modules/.bin/cypress run --browser chrome --config viewportWidth=1980,viewportHeight=1820
```

#### Run test in Firefox with iPhone screensize
```
npx cypress run --browser firefox --config viewportWidth=375,viewportHeight=667
```

#### Open Cypress
```
./node_modules/.bin/cypress open
```

#### Writing tests
Add your own test files to cypress/integration.

## API testing
API tests are located in `/tests` folder

### Run API tests
```
npm test
```