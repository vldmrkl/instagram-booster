# instagram-booster
Node.js program for increasing activity on your Instagram profile by using a method of unfollowing and following popular accounts periodically. Using this program helps with: 
* gaining followers
* increasing the number of likes on your posts
* increasing the number of comments under your posts

# Warning ⚠️
**This package is deprecated.**

**July 2019**: after running this program for about a week, Instagram would send you a notification about a suspicious activity on your account and would ask you to remove your credentials from 3rd-party services. If you don't comply with it, they would either shadowban or block your account.

---

## Dependencies
* [instagram-private-api](https://github.com/huttarichard/instagram-private-api)
* [dotenv](https://github.com/motdotla/dotenv)

## Read More
* [Blog post](https://vldmrkl.com/blog/how-50-lines-of-code-raised-a-thousand-followers-on-instagram-within-one-month)

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
