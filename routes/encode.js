var express = require('express');
var router = express.Router();

const exec = require('child_process').exec;
const download = require('download');
const fs = require('fs');

router.get('/', function(req, res){
    var gifUrl = req.query.gifurl;
    var message = req.query.message;

    var fileName = 'public/gifs/'+Math.random().toString(36).slice(3,7) + '.gif';
    console.log(fileName);
    download(gifUrl).then(data => {
    	fs.writeFileSync(fileName, data);
    	exec('"../Gif.Me/C++/encode"' + ' ' + message + ' ' + fileName, function(error, stdout, stderr){
    		console.log("error: " + error);
    		console.log("stdout: " + stdout);
    		console.log("stderr: " + stderr);
    	});
        res.send(fileName);
    });
});

module.exports = router;