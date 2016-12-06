var fs = require('fs');

fs.readFile('files/node.txt', function(err, data){
    console.log('Contents' + data);
})