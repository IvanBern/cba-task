# CBA Test Task

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