require('dotenv').config();

const Client = require('instagram-private-api').V1;
let device = new Client.Device(process.env.USERNAME);
let storage = new Client.CookieFileStorage(__dirname + '/cookies/' + process.env.USERNAME + '.json');

const accounts = require('./constants');

// from instagram-private-api
function loginAndFollow(user) {
    Client.Session.create(device, storage, process.env.USERNAME, process.env.PASSWORD)
        .then(function (session) {
            return [session, Client.Account.searchForUser(session, user)]
        })
        .spread(function (session, account) {
            return Client.Relationship.create(session, account.id);
        })
}

// from instagram-private-api
function loginAndUnfollow(user) {
    Client.Session.create(device, storage, process.env.USERNAME, process.env.PASSWORD)
        .then(function (session) {
            return [session, Client.Account.searchForUser(session, user)]
        })
        .spread(function (session, account) {
            return Client.Relationship.destroy(session, account.id);
        })
}


reFollow = () => {
    accounts.forEach(account => {
        loginAndUnfollow(account);
        loginAndFollow(accounts);
    });
}

setInterval(() => {
    reFollow();
}, 3600000);