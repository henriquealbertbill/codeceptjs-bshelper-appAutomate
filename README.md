#  codeceptjs-bshelper-app-automate
CodeceptJS Browserstack plugin, to update Test Names, Test Results after test execution 

codeceptjs-bshelper-app-automate is [CodeceptJS](https://codecept.io/) plugin which is to complete tests results on Browserstack after execution. The plugin updates test name and test results on Browserstack using the `event.test.passed` and `event.test.failed` events.

NPM package: <https://www.npmjs.com/package/codeceptjs-bshelper-app-automate>

## Installation
`npm i  codeceptjs-bshelper-app-automate --save-dev`

## Configuration

This plugin should be added in codecept.json/codecept.conf.js

Example:

```
{
...
   plugins: {
     BrowserstackHelper: {
      require: 'codeceptjs-bshelper-app-automate',
      enabled: true
    }
   }
...
}
```
To use this plugin, users must provide the Browserstack User, Key & Host as part of the configuration.
