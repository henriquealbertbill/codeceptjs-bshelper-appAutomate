
# codeceptjs-bshelper-appAutomate
CodeceptJS Browserstack plugin, to update Test Names, Test Results after test execution 

codeceptjs-bshelper-appautomate is [CodeceptJS](https://codecept.io/) plugin which is to complete tests results on Browserstack after execution. The plugin updates test name and
test results on Browserstack using the `event.test.passed` and `event.test.failed` events.

NPM package: 

## Installation
`npm i codeceptjs-bshelper-appAutomate --save-dev`

## Configuration

This plugin should be added in codecept.json/codecept.conf.js

Example:

```
{
...
   plugins: {
     BrowserstackAppAutomateHelper: {
      require: 'codeceptjs-bshelper-appAutomate',
      enabled: true
    }
   }
...
}
```
To use this plugin, users must provide the Browserstack User, Key & Host as part of the configuration.
#   c o d e c e p t j s - b s h e l p e r - a p p A u t o m a t e  
 