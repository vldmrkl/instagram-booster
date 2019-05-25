require("dotenv").config();
const instagramPrivateAPI = require("instagram-private-api");
const IG = new instagramPrivateAPI.IgApiClient();
const accounts = require("./constants");

IG.state.generateDevice(process.env.USERNAME);

async function login() {
  await IG.simulate.preLoginFlow();
  const loggedInUser = await IG.account.login(
    process.env.USERNAME,
    process.env.PASSWORD
  );
}

function reFollow() {
  accounts.forEach(async account => {
    const userId = await IG.user.getIdByUsername(account);
    await IG.friendship.destroy(userId);
    IG.friendship.create(userId);
  });
}

login().then(() => {
  reFollow();
  setInterval(() => {
    reFollow();
  }, 3600000);
});
