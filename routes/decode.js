var express = require('express');
var router = express.Router();

const {exec} = require('child_process');

router.get('/decode', function(req, res){
    var gifUrl = req.query.gifurl;

    var fileName = gifUrl.substr(gifUrl.length - 15);
    var child = exec('"../../C++/decode.cc"' + ' ' + message + ' ' + fileName);
    child.stdout.pipe(res);
});

module.exports = router;