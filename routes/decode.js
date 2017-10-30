var express = require('express');
var router = express.Router();

const exec = require('child_process').exec;

router.get('/', function(req, res){
    var gifUrl = req.query.gifurl;

    var fileName = gifUrl.substr(gifUrl.length - 8);
    var child = exec('"../Gif.Me/C++/decode.cc"' + ' ' + message + ' ' + fileName);
    child.stdout.pipe(res);
});

module.exports = router;