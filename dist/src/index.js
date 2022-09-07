const { default: axios } = require('axios');
const { event, container } = require('codeceptjs');
const helpers = container.helpers();
const urlBS = 'https://api-cloud.browserstack.com/app-automate/sessions/';

const defaultConfig = {
  user: helpers.Appium.config.user,
  key: helpers.Appium.config.key,
};

module.exports = () => {
  const defaultBsAuth = { auth: { username: defaultConfig.user, password: defaultConfig.key } };

  event.dispatcher.on(event.test.before, test => {
    container.append(helpers.Appium.config.desiredCapabilities.name = test.title);
  });

  event.dispatcher.on(event.test.passed, async () => {
    const { sessionId } = helpers.Appium.browser;
    await axios.put(`${urlBS}${sessionId}.json`, { status: 'passed' }, defaultBsAuth);
  });

  event.dispatcher.on(event.test.failed, async error => {
    const { sessionId } = helpers.Appium.browser;
    console.log(`msg${error.message}`);
    await axios.put(`${urlBS}${sessionId}.json`, { status: 'failed', reason: error.message }, defaultBsAuth);
  });
};
