const { exec } = require("child_process");
var http = require('http');

let myData;
exec(`ip a | grep -E "inet.* eth"`, (error, stdout, stderr) => {
    if (error) return console.log(`error: ${error.message}`);
    if (stderr) return console.log(`stderr: ${stderr}`);
    console.log(`stdout: ${stdout}`);
    myData = stdout
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(new Date + ':  Hello \n' + myData);
}).listen(process.env.PORT, '0.0.0.0');
console.log('Server running at http://0.0.0.0:' + process.env.PORT);
