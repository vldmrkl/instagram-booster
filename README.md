# instagram-booster
Node.js application for increasing the number of Instagram followers by unfollowing and following popular accounts periodically.

# Warning
As of July 2019, after running this program about a week, Instagram sends you a notification about a suspicious activity on your account and asks you to remove your credentials from 3rd-party services. If you don't comply with it, they would either shadowban or block your account.

### Publications
* [blog.vldmrkl.com](https://blog.vldmrkl.com/how-50-lines-of-code-raised-a-thousand-followers-on-instagram-within-one-month/)
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
