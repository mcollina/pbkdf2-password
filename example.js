
var hasher = require("./")();
var assert = require("assert");

var opts = {
  password: "helloworld"
};

hasher(opts, function(err, pass, salt, hash) {
  opts.salt = salt;
  hasher(opts, function(err, pass, salt, hash2) {
    assert.deepEqual(hash2, hash);
    console.log("OK");
  });
});
