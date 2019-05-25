require('dotenv').config();
const instagramPrivateAPI = require('instagram-private-api');
const IG = new instagramPrivateAPI.IgApiClient();
const accounts = require('./constants');

IG.state.generateDevice(process.env.USERNAME);

async function login() {
  await IG.simulate.preLoginFlow();
  const loggedInUser = await IG.account.login(
    process.env.USERNAME,
    process.env.PASSWORD,
  );
}

async function refollow(username) {
  const userId = await IG.user.getIdByUsername(username);
  await IG.friendship.destroy(userId);
  IG.friendship.create(userId);
}

async function refollowAllAccounts() {
  accounts.forEach((accountName) => refollow(accountName));
}

(async function () {
  const oneHourInMs = 3600000;
  await login();

  refollowAllAccounts();
  setInterval(() => {
    refollowAllAccounts();
  }, oneHourInMs);
})();
