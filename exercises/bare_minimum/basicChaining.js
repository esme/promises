/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
Promise.promisifyAll(fs);
var promisification = require('./promisification');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // readFileAsync
  return fs.readFileAsync(readFilePath, 'utf8')
    .then((file) => {
      return file.split('\n')[0];
    })
    .then((user) => promisification.getGitHubProfileAsync(user))
    .then((profile) => fs.writeFileSync(writeFilePath, JSON.stringify(profile)))
};

//fetchProfileAndWriteToFile(fileWithGithubHandle)

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
