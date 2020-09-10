
## Initialise project 

Creating a package.json file

``` 
npm init
```

## Install cypress
```
npm install cypress --save-dev
```

## Open Cypress
```
./node_modules/.bin/cypress open
```

## Writing tests
Add your own test files to cypress/integration.

## Run tests 

```
npm "cy:run"
```

or 

```
./node_modules/.bin/cypress run

```

## Run tests in different browser and viewports


### Run test in Chrome with FullHD screensize
```
./node_modules/.bin/cypress run --browser chrome --config viewportWidth=1980,viewportHeight=1820
```

### Run test in Firefox with iPhone screensize
```
npx cypress run --browser firefox --config viewportWidth=375,viewportHeight=667
```
