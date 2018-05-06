import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { getTweets } from './controllers/twitterController';

dotenv.config();
const app = new express();

app.get("/", function(req, res) {
  res.sendFile(path.resolve('./index.html'));
});

app.get("/api/twitter/:id", (req, res) => {getTweets(req, res)});

app.use(express.static('dist'));
app.use('/static', express.static('static'));

// Serve the files on port 3000.
app.listen(process.env.PORT || 8080, function () {
  console.log('App listening on port 8080!\n');
});
