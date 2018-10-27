# instagram-booster
Node app for increasing the number of Instagram followers by unfollowing and following popular accounts periodically.

### Publications
* [Medium](https://medium.com/@volodymyrklymenko/how-50-lines-of-code-raised-a-thousand-of-followers-on-instagram-within-one-month-9f672c310c8c)
* [RBC FutureMakers](http://www.rbc.com/futuremakers/#/commentary/how-50-lines-of-codes-raised-a-thousand-followers)

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
