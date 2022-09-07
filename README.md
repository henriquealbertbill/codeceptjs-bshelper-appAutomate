#  codeceptjs-bshelper-app-automate
CodeceptJS Browserstack plugin, to update Test Names, Test Results after test execution 
![image](https://user-images.githubusercontent.com/62605139/188968904-57d3e55c-8006-4a2e-a5b6-1ca4e6b9f497.png)

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
