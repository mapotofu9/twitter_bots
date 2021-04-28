require('dotenv').config()
const {TwitterClient} = require('twitter-api-client')
var fs = require("fs")

const twitterClient = new TwitterClient({
    apiKey: process.env.TWITTER_API_KEY,
    apiSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

let data = fs.readFileSync('./input.txt', function(err,data){
    if(err){return console.error(err);}
}).toString();

var lines = data.split('\n\n');
let tweet = lines[Math.floor(Math.random()*lines.length)];
console.log(tweet);

twitterClient.tweets.statusesUpdate({
    status: tweet
}).then (response => {
    console.log("Tweeted", response)
}).catch(err => {
    console.error(err)
})