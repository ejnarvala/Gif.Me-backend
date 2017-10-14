var express = require('express');
var router = express.Router();

const {exec} = require('child_process');

router.get('/encode', function(req, res){
    var gifUrl = req.query.gifurl;
    var message = req.query.message;

    var fileName = 'gifs/'+Math.random().toString(36).slice(2) + '.gif';

    download(gifUrl, './', {outputName: fileName})
        .on('done', function() {
            exec('"../../C++/encode.cc"' + ' ' + message + ' ' + fileName);
            res.send(fileName);
        });
    
});

module.exports = router;