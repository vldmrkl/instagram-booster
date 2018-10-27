# instagram-booster
Node app for increasing the number of Instagram followers by unfollowing and following popular accounts periodically.

## Dependencies
* [instagram-private-api](https://github.com/huttarichard/instagram-private-api)
* [dotenv](https://github.com/motdotla/dotenv)

## Set up
1. Clone the repository, and install node dependencies by running 

```
npm install
```

2. Create `.env` file using this this format:
```
USERNAME="YOUR_IG_USERNAME"
PASSWORD="YOUR_IG_PASSWORD"
```

3. Edit the list of accounts you want to follow and unfollow in `constants.js`. (Optional)

4. Start the app by running:
```
node app.js
```
