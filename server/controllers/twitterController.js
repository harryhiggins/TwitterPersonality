import fetch from 'node-fetch';
import twitterAPI from 'twitter';
import watson from 'watson-developer-cloud';
const watsonPersonality = require('watson-developer-cloud/personality-insights/v3');
const watsonAuth = require('watson-developer-cloud/authorization/v1');

export const getTweets = function(req, res) {
  // create authenticated twitter api
  let twitter = new twitterAPI({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });


  let tweetList;
  // get tweets from username
  twitter.get(`statuses/user_timeline.json?screen_name=${req.params.id}&count=100`, {})
  .then(function(tweets) {
    console.log('Tweets recieved');
    let tweetData = {
      tweetList: []
    }
    tweets.map(function(tweet) {
      tweetData.tweetList.push(tweet.text);
    });

    let personality_insights = new watsonPersonality({
      username: process.env.WATSON_USERNAME,
      password: process.env.WATSON_PASSWORD,
      version_date: '2017-10-13'
    });

    let authorization = new watsonAuth({
      username: process.env.WATSON_USERNAME,
      password: process.env.WATSON_PASSWORD,
      version: 'v1',
      url: 'https://gateway.watsonplatform.net/authorization/api'
    });

    var authParams = {
      url: 'https://gateway.watsonplatform.net/personality-insights/api'
    };
    let authToken;
    authorization.getToken(authParams, function (err, token) {
      if (!token) {
        console.log('Error:', err);
      } else {
        authToken = token;
        console.log('Watson auth token recieved');

        // console.log('Tweets: ' + JSON.stringify(tweetData));
        console.log('Auth Token: ' + authToken);
        let params = {
          // Get the content from the JSON file.
          content: JSON.stringify(tweetData),
          content_type: 'text/plain',
          consumption_preferences: true,
          raw_scores: true,
          'X-Watson-Authorization-Token': authToken
        };

        personality_insights.profile(params, function(error, response) {
          if (error) {
            console.log('Error:', error);
          } else {
            console.log('Personality insights received');
            // console.log(JSON.stringify(response, null, 2));
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(response));
          }
        });

      }
    });


  });
}
